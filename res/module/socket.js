import React, { Component } from 'react';
import io  from  'socket.io-client'
import CONSTENT from './api.endpoint.Constent'

const socket  = io(CONSTENT.SOCKET_CON);

export { socket }
