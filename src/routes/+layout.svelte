<script lang="ts">
    import '../app.css'

    import Navbar from '../components/nav/Navbar.svelte';

    import Footer from '../components/nav/Footer.svelte';
</script>

<div class="flex flex-col h-screen">

    <Navbar></Navbar>

    <div class="flex-grow">
        <slot></slot>
    </div>

    <Footer></Footer>

</div>
