import React, { Component, Fragment } from 'react';
import Typing from 'react-typing-animation';
import {
    Container,
    Col,
    Image,
    Card,
    Modal,
    Carousel
} from 'react-bootstrap';
import styles from './styles/ProjectPage'
import FlipMove from 'react-flip-move';
import CategoryGroup from '../components/CategoryGroup';
import YouTube from 'react-youtube';

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            hoverIndex: -1,
            isHover: false,
            showModal: false,
            selectedItem: null,
        };
    }

    _updateTab = _index => {
        this.setState({
            index: _index,
        });
    };

    _renderImages = () => {
        let tmpData = this.props.projects;
        switch (this.state.index) {
            case 1:
                tmpData = tmpData.filter(item => item.type === 'mobile');
                break;
            case 2:
                tmpData = tmpData.filter(item => item.type === 'web');
                break;
            case 3:
                tmpData = tmpData.filter(item => item.type === 'other');
                break;
        }
        return tmpData.map((item, index) => {
            return (
                <Col xs={12} sm={6} md={4} xl={3} style={styles.itemContainer}>
                    <div
                        className="itemTag"
                        onMouseOver={() => {
                            if (!this.state.isHover) {
                                console.log('onMouseUp');
                                this.setState({
                                    hoverIndex: index,
                                    isHover: true,
                                });
                            }
                        }}
                        onMouseOut={() => {
                            this.setState({
                                hoverIndex: -1,
                                isHover: false,
                            });
                        }}
                        onClick={() => {
                            this.setState({
                                showModal: true,
                                selectedItem: item,
                            });
                        }}
                        style={styles.itemImageContainer}
                    >
                        <Image
                            fluid
                            rounded
                            style={{
                                ...{ width: '100%', height: '100%', objectFit: 'cover' },
                                ...(this.state.isHover &&
                                    this.state.hoverIndex === index && {
                                    transform: 'scale(1.2)',
                                    transition: 'all 0.5s ease 0s',
                                    borderRadius: 5,
                                }),
                            }}
                            src={item.img}
                        />

                        <div
                            className={'hover_bg'}
                            style={{
                                ...styles.itemHoverBg,
                                ...{
                                    visibility:
                                        this.state.isHover && this.state.hoverIndex === index ? 'visible' : 'hidden',
                                },
                            }}
                        >
                            <div
                                className="itemTitle"
                                style={{
                                    color: '#ffffff',
                                    fontSize: 20,
                                    fontWeight: 'bolder',
                                    left: 40,
                                    right: 40,
                                    pointerEvents: 'none',
                                    visibility:
                                        this.state.isHover && this.state.hoverIndex === index ? 'visible' : 'hidden',
                                }}
                            >
                                <span>{item.title}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        });
    };

    _renderTypingAnimation = () => {
        return (
            <div style={styles.typeBlackBg} ref={this.homeRef}>
                <div style={styles.typeContainer}>
                    <div style={{ height: 50 }}></div>
                    <span>I'm Andy Chan</span>
                    <Typing.Delay ms="200" />
                    <span>Mobile Apps Developer</span>
                    <Typing.Delay ms="200" />
                    <span>iOS & Android</span>
                </div>
            </div>
        );
    };

    _renderModal = () => {
        let carouselItems = null;
        let responsibilities = null;
        if (
            this.state.selectedItem &&
            this.state.selectedItem.images &&
            this.state.selectedItem.responsibility
        ) {
            carouselItems = this.state.selectedItem.images.map(image => {
                return (
                    <Carousel.Item style={{ height: 350, backgroundColor: '#000' }}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                            style={{ objectFit: 'contain', height: '100%', imageOrientation: 'from-image' }}
                        />
                    </Carousel.Item>
                );
            });
            responsibilities = this.state.selectedItem.responsibility.map(item => {
                return (
                    <ul>
                        <li style={{ marginTop: 10 }}>
                            {item.title}
                            {item.sub && (
                                <ul>
                                    {item.sub.map(sub => {
                                        return <li style={{ marginTop: 10 }}>{sub}</li>;
                                    })}
                                </ul>
                            )}
                        </li>
                    </ul>
                );
            });
        }

        return (
            <Modal
                show={this.state.showModal}
                centered
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                animation={true}
                onHide={() => {
                    this.setState({
                        selectIndex: -1,
                        showModal: false,
                    });
                }}
            >
                <Card
                    style={{
                        width: '100%',
                        padding: 20,
                    }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.selectedItem ? this.state.selectedItem.title : ''}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ overflowY: 'auto', maxHeight: window.screen.height * 0.7 }}>
                        {this.state.selectedItem && this.state.selectedItem.youtubeId && (
                            <YouTube videoId={this.state.selectedItem.youtubeId} opts={{ width: '100%' }} />
                        )}
                        <Carousel interval={null} style={{ marginTop: 40, marginBottom: 40 }}>
                            {carouselItems}
                        </Carousel>
                        <p style={{ fontSize: 18, fontWeight: 700 }}>Description</p>
                        <p style={{ lineHeight: '30px', marginBottom: 40 }}>
                            {this.state.selectedItem ? this.state.selectedItem.desc : ''}
                        </p>
                        <p style={{ fontSize: 18, fontWeight: 700 }}>Responsibility</p>
                        {responsibilities}
                    </Modal.Body>
                </Card>
            </Modal>
        );
    };

    render() {
        return (
            <Fragment>
                {this._renderTypingAnimation()}
                <div style={{ marginTop: 20 }}></div>
                <CategoryGroup
                    containerStyle={styles.categoryGroup}
                    _updateTab={this._updateTab}
                    selectIndex={this.state.index}
                    btnTextArr={['All', 'Mobile', 'Web', 'Others']}
                />
                <Container
                    ref={this.projectRef}
                    fluid={true}
                    style={{
                        marginTop: 30,
                        width: '100%',
                        minHeight: 600,
                    }}
                >
                    <FlipMove className="row">{this._renderImages()}</FlipMove>
                </Container>
                {this._renderModal()}
            </Fragment>
        );
    }
}

ProjectPage.defaultProps = {
    projects: []
};

export default ProjectPage;
