const startAnimationTypeContainer = {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'monospace',
    color: '#ffffff',
    fontSize: 25,
    height: window.innerHeight,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    zIndex: 999,
}

const typeBlackBg = {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgb(51,51,51)',
    height: 200,
    marginTop: 56,
}

const typeContainer = {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'monospace',
    color: '#ffffff',
    fontSize: 20,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 999,
}

const categoryGroup = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const itemContainer = {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    cursor: 'pointer',
}

const itemImageContainer = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 5,
    textAlign: 'center',
}

const itemHoverBg = {
    position: 'absolute',
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 30px',
}

const styles = {
    startAnimationTypeContainer,
    typeBlackBg,
    typeContainer,
    categoryGroup,
    itemContainer,
    itemImageContainer,
    itemHoverBg
}

export default styles