drop procedure if exists TransfDataFromStage;

DELIMITER //

CREATE PROCEDURE TransfDataFromStage()
BEGIN

    select min(id), max(id) 
      into @min, @max
      from stage
     where 1=1
       and isProcessed = 0;

    set @current = @min;
    set @lastID = 0;

    WHILE (@current <= @max) DO

        /*Insert contact and get the last ID*/
        insert into contact (title, first_name, last_name, company_name, notes, date_of_birth)
        select Title, FirstName, LastName, Business, Notes, DateOfBirth
          from stage
         where 1=1
           and isProcessed = 0
           and id = @current;

        set @lastID = LAST_INSERT_ID();

        /*Insert phone*/
        insert into phone (contact_id, name, content, type)
        select * from (select @lastID as contact_id, FirstName as name, HomeNumber as content, 'Home' as type
        from stage
        where 1=1
        and isProcessed = 0
        and id = @current

        union
        select @lastID as contact_id, FirstName as name, FaxNumber as content, 'Work' as type
        from stage
        where 1=1
        and isProcessed = 0
        and id = @current
        union
        select @lastID as contact_id, FirstName as name, WorkNumber as content, 'Work' as type
        from stage
        where 1=1
        and isProcessed = 0  
        and id = @current
        union
        select @lastID as contact_id, FirstName as name, MobileNumber as content, 'Mobile' as type
        from stage
        where 1=1
        and id = @current
        and isProcessed = 0
        union
        select @lastID as contact_id, FirstName as name, OtherNumber as content, 'Other' as type
        from stage
        where 1=1
        and id = @current
        and isProcessed = 0) as T
        where 1=1
        and content is not null;

        /*Insert Address*/
        insert into address(contact_id, street1, street2, suburb, city, post_code)
        select @lastID as contact_id, AddressLine1 as street1, AddressLine2 as street2, Suburb as suburb, City as city, PostCode as post_code 
        from stage
        where 1=1
        and id = @current
        and isProcessed = 0;

        /*Update stage table*/
        UPDATE stage 
        SET isProcessed = 1
        WHERE 1 = 1 
        AND id = @current;

        set @current = @current + 1;

    END WHILE;

END //

DELIMITER ;
