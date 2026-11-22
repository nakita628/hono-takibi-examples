import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTrafficMirrorFilterRuleRoute,
  postActionDeleteTrafficMirrorFilterRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTrafficMirrorFilterRuleHandler = app
  .openapi(getActionDeleteTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
