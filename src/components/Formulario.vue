<template>
    <div class="row g-3 align-items-center mb-3 input-group has-validation">
        <div class="col-auto">
            <label id="labelName" class="col-form-label">Nombre</label>
        </div>
        <div class="col-auto">
            <input type="text" id="inputName" class="form-control is-invalid "  aria-describedby="labelName validationName" required>
        </div>
        <div class="col-auto">
            <div id="passwordHelpInline" class="valid-feedback">
                nombre entre 5 y 15 caracteres
            </div>
            <div id="validationName" class="invalid-feedback">Example invalid feedback text</div>
        </div>
    </div>
    <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
            <label for="inputAge" class="col-form-label">Edad</label>
        </div>
        <div class="col-auto">
            <input type="number" id="inputAge" class="form-control" required>
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
                entre 18 y 120 años
            </span>
        </div>
    </div>
    <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
            <label for="inputEmail" class="col-form-label">Email</label>
        </div>
        <div class="col-auto">
            <input type="email" id="inputEmail" class="form-control" required>
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
                email válido
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Formulario',
    props: [],
    data() {
        return {
            nombre: "",
            edad: "",
            email: "",
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>