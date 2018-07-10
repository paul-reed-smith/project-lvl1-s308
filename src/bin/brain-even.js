#!/usr/bin/env node
import whatIsUserName from '..';

console.log('Welcome to Brain Games!');

const userName = whatIsUserName();
userName();

console.log(`Hello! ${userName}`);
