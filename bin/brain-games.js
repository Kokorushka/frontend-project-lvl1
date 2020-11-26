#!/usr/bin/env node

import { greeting, getName, greetingWithName } from '../src/cli.js';

greeting();
const userName = getName();
greetingWithName(userName);
