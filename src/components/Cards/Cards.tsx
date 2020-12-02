import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UsersType} from "../../api/api";
import {setUsersTC} from "../../redux/user-reducer";

/*type PropsType = {
    u: Array<CharacterType>
}*/

export const Cards = React.memo(function () {
    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsersTC())
    }, [dispatch]);
    console.log('render Cards');
    console.log(users);

    return (
        <>
            <div>aaa</div>
            {/*<Grid container spacing={1} justify='center'>
                {props.characters.map(c => {
                    return <Paper key={c.id}
                                  style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                        <MyCard character={c}/>
                    </Paper>
                })}
            </Grid>*/}
        </>
    );
})

