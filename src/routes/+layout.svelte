<script lang="ts">
    import '../app.css'

    import Navbar from '../components/nav/Navbar.svelte';

    import Footer from '../components/nav/Footer.svelte';
</script>

<Navbar></Navbar>

<slot></slot>

<Footer></Footer>
