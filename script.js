function calcularCosto(event) {
    event.preventDefault(); 

    let nombre = document.getElementById('nombre').value;
    let centro = document.getElementById('centro').value;
    let carrera = document.getElementById('carrera').value;

    // Definiendo las cuotas base
    let cuotaMensual = 125; 
    let matriculaCiclo = 200; 
    let pagoLaboratorios = (carrera === "medicina") ? 150 : 100; 

    // Ajustes segun si es priv o no
    if (centro === "privado") {
        cuotaMensual *= 1.5;
        matriculaCiclo *= 1.2;
    }

    // Duración de la carrera según la carrera seleccionada
    let duracionCarrera;
    if (carrera === "licenciatura") {
        duracionCarrera = 4;
    } else if (carrera === "medicina") {
        duracionCarrera = 6;
    } else if (carrera === "ingenieria") {
        duracionCarrera = 5;
    }

    // Calcular costos anuales y totales
    let pagoAnualCuotas = cuotaMensual * 12;
    let pagoAnualMatriculas = matriculaCiclo * 2; 
    let pagoAnualLaboratorios = pagoLaboratorios * 2;
    let totalAnual = pagoAnualCuotas + pagoAnualMatriculas + pagoAnualLaboratorios;
    let costoTotalCarrera = totalAnual * duracionCarrera;

   
    let nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado del Costo de Carrera</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f7fa;
                    color: #333;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    max-width: 600px;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h3 {
                    color: #4A90E2;
                }
                h4 {
                    color: #333;
                    margin-bottom: 20px;
                }
                hr {
                    border: 0;
                    height: 1px;
                    background: #ddd;
                    margin: 20px 0;
                }
                p {
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.6;
                }
                strong {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h3>BIENVENIDOS A LA UNIVERSIDAD GUAPO GUARDADO</h3>
                <h4>BOLETA DE INSCRIPCIÓN</h4>
                <hr>
                <p><strong>Aspirante:</strong> ${nombre}</p>
                <p><strong>Carrera:</strong> ${carrera.charAt(0).toUpperCase() + carrera.slice(1)}</p>
                <p><strong>Tipo Centro Educativo:</strong> ${centro === "publico" ? "Público" : "Privado"}</p>
                <p><strong>Cuota Mensual:</strong> $${cuotaMensual.toFixed(2)}</p>
                <p><strong>Pago de Matrícula por Ciclo:</strong> $${matriculaCiclo.toFixed(2)}</p>
                <p><strong>Pago de Uso de Laboratorios por Ciclo:</strong> $${pagoLaboratorios.toFixed(2)}</p>
                <hr>
                <p><strong>Pago Anual en Concepto de Cuotas:</strong> $${pagoAnualCuotas.toFixed(2)}</p>
                <p><strong>Pago Anual en Concepto de Matrículas:</strong> $${pagoAnualMatriculas.toFixed(2)}</p>
                <p><strong>Pago Anual en Concepto de Uso de Laboratorios:</strong> $${pagoAnualLaboratorios.toFixed(2)}</p>
                <p><strong>Total, a Pagar Anualmente:</strong> $${totalAnual.toFixed(2)}</p>
                <hr>
                <p><strong>Costo Total de la Carrera:</strong> $${costoTotalCarrera.toFixed(2)}</p>
                <hr>
                <P>Xavier Cruz el mejor 2024</p>
            </div>
        </body>
        </html>
    `);
}
