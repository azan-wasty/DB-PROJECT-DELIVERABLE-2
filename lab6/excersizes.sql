--Q1
SELECT DISTINCT M.MissionID, M.Title, B.Name AS BeyonderName, B.Status, A.Name AS ArtifactName, A.RiskLevel
FROM Missions M
JOIN Artifacts A ON M.MissionID = A.MissionID
JOIN Beyonders B ON A.GuardianID = B.BeyonderID
WHERE A.RiskLevel = 'High' AND (B.Status = 'At Risk' OR B.Status = 'Lost Control');