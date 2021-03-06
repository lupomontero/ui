import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
    display: 'inline-block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: 800,
    padding: '14px 21px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
});

const PrimaryButton = (props) => {
  const { classes, tag } = props;
  const TagName = tag;

  return (
    <TagName className={classes.root} {...props} />
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
  tag: PropTypes.string.isRequired,
};

export default withStyles(styles)(PrimaryButton);
