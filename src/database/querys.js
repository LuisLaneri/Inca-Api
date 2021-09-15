

export const consultas={
    mostrarEmpleados:"select* from Empleadoo",
    insertEmpleados:"INSERT INTO Empleadoo (Nombre, Apellido, Documento, FechaNac, Domicilio) values(@nombre,@apellido,@documento,@fechanac,@domicilio) ",
    buscarPorID:"SELECT* FROM Empleadoo where ID = @id",
    borrarEmpleado:"DELETE FROM Empleadoo where ID=@id",
    actualizarEmpleado:"UPDATE Empleadoo SET Nombre=@nombre, Apellido=@apellido, FechaNac=@fechanac, Domicilio=@domicilio where ID=@id",
}