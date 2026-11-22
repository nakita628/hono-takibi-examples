import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTrafficMirrorFilterRuleRoute,
  postActionCreateTrafficMirrorFilterRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTrafficMirrorFilterRuleHandler = app
  .openapi(getActionCreateTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
