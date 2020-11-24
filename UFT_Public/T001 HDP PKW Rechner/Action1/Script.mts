
Dim lstrDatensatz
lstrDatensatz = Expleo_LoadSettings()

LoadAndRunAction Environment.value("BPTReusableActionPath") & "RA_BDD_EXPLEO", "EXPLEO_BDD_Run", oneIteration

SQSReport.Publish Err.Number, Err.Description
SQSReport.ShowResults

