import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTrafficMirrorFilterRuleRoute,
  postActionModifyTrafficMirrorFilterRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyTrafficMirrorFilterRuleHandler = app
  .openapi(getActionModifyTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTrafficMirrorFilterRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
