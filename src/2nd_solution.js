SELECT
  c.customerid,
  c.name,
  (
    SELECT GROUP_CONCAT (s.subjectname, ', ')
    FROM subject_student_mapping ssm
    JOIN subjects s ON ssm.subject_id = s.subjectid
    WHERE ssm.customer_id = c.customerid
    ORDER BY s.subjectname ASC
  ) AS subjects
FROM
  customers c;