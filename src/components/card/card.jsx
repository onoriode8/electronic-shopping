import classes from './card.module.css';

const card = props => (
    <div className={classes.container}>
        <div className={classes.contain}>
            {props.children}
        </div>
    </div>
);


export default card;