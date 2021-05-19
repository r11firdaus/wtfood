import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actionChangeLoading } from '../../config/redux/action';
import Button from '../button';

const Search = () => {
    const history = useHistory();
    const loading = useSelector(state => state.loading)

    const searchData = (e) => {
        const searchVal = document.getElementById('searchBox');
        e.preventDefault();
        history.push(`/result/meal/${searchVal.value}`)
        actionChangeLoading();
    }

    return (
        <form className="d-flex mr-auto">
            <input className="form-control mr-2 searchbox" id='searchBox' type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: '400px' }} />
            <Button className="btn btn-primary pencarian" onClick={e=>searchData(e)} type="submit" name="Submit" loading={loading} />
        </form>
    )
}

export default memo(Search);