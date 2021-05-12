const tinggi = window.innerHeight;

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: tinggi / 2 }}>
            <div className="spinner-grow text-primary" role="status">
            </div>
        </div>
    )
}
export default Spinner;