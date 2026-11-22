import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAbilityScoresIndexRoute,
  getApiAlignmentsIndexRoute,
  getApiBackgroundsIndexRoute,
  getApiLanguagesIndexRoute,
  getApiProficienciesIndexRoute,
  getApiSkillsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const characterDataHandler = app
  .openapi(getApiAbilityScoresIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBackgroundsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLanguagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProficienciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSkillsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
