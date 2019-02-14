Sub Main(R)
    Dim endName As String
    Dim lastRow As String
    ac = ActiveCell.address
    Selection.Copy
    'find last name row
    Sheets("Data").Select
    Range("a1").Select
    Selection.End(xlDown).Offset(1, 0).Select
    endName = ActiveCell.Row
    If R <> "A" Then
        endName = endName - 1
    End If
    Range("b3").Value = endName
    'add column to last row
    targetcolumn = R + endName
    Range(targetcolumn).Select
     Selection.PasteSpecial paste:=xlPasteValues, Operation:=xlNone, SkipBlanks _
        :=False, Transpose:=False
        Sheets("Entry").Select
    Range(ac).Select
    Application.CutCopyMode = False
    Selection.Font.Color = RGB(0, 0, 255)
    ' Selection.Delete Shift:=xlUp
    ActiveCell.Offset(1, 0).Range("A1").Select
End Sub

Sub export()
    Application.DisplayAlerts = False 'avoid from "save prompt window"
    Sheets("Data").Select
    Range("a3").Select
    Selection.End(xlDown).Select
    ' Range(Selection, Selection.End(xlDown)).Select
    endName = ActiveCell.Row
    targetRange="A3:"+"I"+trim(str(endName))
    Range(targetRange).Select
    Selection.Copy
    Workbooks.Add
    ActiveSheet.paste
        ActiveWorkbook.SaveAs Filename:="C:\projects\perm\hand\Serve", FileFormat:=xlText, _
        CreateBackup:=False
        ActiveWorkbook.Close SaveChanges:=False
  
    Application.DisplayAlerts = False 'avoid from "save prompt window"
End Sub
