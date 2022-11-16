<template>
    <div>
        <headerTop></headerTop>
        <div class="error__bloc">
            <h2 class="error__bloc__heading error__bloc__item">404</h2>
            <img src="../assets/erreur404.png" alt="Page Introuvable !">
            <p class="error__bloc__text error__bloc__item">Nous n'avons pu être en capacité de trouver la page que vous
                cherchez</p>
        </div>
        <footerBottom></footerBottom>
    </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
    name: 'Page404',
    components: {
        'headerTop': Header,
        'footerBottom': Footer
    },
}

</script>