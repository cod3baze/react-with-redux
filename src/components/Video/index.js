import React from "react";
import { connect } from "react-redux";
// import { Container } from './styles';

const Video = ({ activeLesson, activeModule }) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <span>Aula {activeLesson.title}</span>
  </div>
);

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
