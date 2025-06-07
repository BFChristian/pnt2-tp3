<template>
    <form>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" id="nombre" v-model="formData.nombre" class="form-control"
                aria-describedby="nombreTexto" />
            <div id="nombreTexto" class="form-text">Ingrese un nombre que contenga entre 5 y 15 caracteres</div>
        </div>
        <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="number" id="edad" v-model="formData.edad" class="form-control" aria-describedby="edadTexto" />
            <div id="edadTexto" class="form-text">Ingrese una edad entre 18 y 120</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="formData.email" class="form-control"
                aria-describedby="emailTexto" />
            <div id="emailTexto" class="form-text">Ingrese un email válido</div>
        </div>

        <button type="button" class="btn btn-primary" :disabled="deshabilitarBotonEnviar">Enviar datos</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ formData.nombre }}</td>
                <td>{{ formData.edad }}</td>
                <td>{{ formData.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Formulario',
    props: [],
    data() {
        return {
            formData: {
                nombre: null,
                edad: null,
                email: null,
            },
        }
    },
    methods: {
        campoLimpio(campo) {
            return campo === null || campo === '';
        },
        validarNombre(nombre) {
            return (nombre?.length >= 5 && nombre?.length <= 15);
        },
        validarEdad(edad) {
            return (edad >= 18 && edad <= 120);
        },
        validarEmail(email) {
            return email?.includes('@') && email?.includes('.com');
        }
    },
    computed: {
        deshabilitarBotonEnviar() {
            // TRUE = deshabilitado el botón
            // FALSE = habilitado el botón
            let resultado = false;
            if (Object.values(this.formData).some(campo => this.campoLimpio(campo))) resultado = true;
            if (!this.validarNombre(this.formData.nombre)) resultado = true;
            if (!this.validarEdad(this.formData.edad)) resultado = true;
            if (!this.validarEmail(this.formData.email)) resultado = true;
            return resultado;
        }
    }
}
</script>

<style scoped></style>