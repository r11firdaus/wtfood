import { useState } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actionChangeLoading } from '../../config/redux/action';
import Button from '../button';

const Search = () => {
    const history = useHistory();
    const loading = useSelector(state => state.loading)
    const [cari, setcari] = useState("")

    const searchData = () => {
        actionChangeLoading();
        history.push(`/result/meal/${cari}`)
        actionChangeLoading();
    }

    return (
        <form className="d-flex mr-auto">
            <input className="form-control mr-2 searchbox" onChange={e=>setcari(e.target.value)} value={cari} id='searchBox' type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: '400px' }} />
            <Button className="btn btn-primary pencarian" onClick={searchData} type="submit" name="Submit" loading={loading} />
        </form>
    )
}

export default memo(Search);