#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'

import minimist from 'minimist'
import prompts from 'prompts'
import { red, green, bold } from 'kolorist'

async function init() {
  throw new Error(red('✖') + ' TODO')
}

init().catch((e) => {
  console.error(e)
})
