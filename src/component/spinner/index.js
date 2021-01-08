const tinggi = window.innerHeight;

const Spinner = () => {
    return (
        <div class="d-flex justify-content-center" style={{ marginTop: tinggi / 2 }}>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner;