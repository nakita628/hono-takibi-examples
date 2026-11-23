import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConvertApiPromRulesNamespaceTitleGroupRoute,
  deleteConvertApiPromRulesNamespaceTitleRoute,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
  deleteConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  getConvertApiPromRulesNamespaceTitleGroupRoute,
  getConvertApiPromRulesNamespaceTitleRoute,
  getConvertApiPromRulesRoute,
  getConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute,
  getConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  getConvertPrometheusConfigV1RulesRoute,
  postConvertApiPromRulesNamespaceTitleRoute,
  postConvertApiPromRulesRoute,
  postConvertPrometheusConfigV1RulesNamespaceTitleRoute,
  postConvertPrometheusConfigV1RulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const convertHandler = app
  .openapi(getConvertApiPromRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertApiPromRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConvertApiPromRulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertApiPromRulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertApiPromRulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConvertApiPromRulesNamespaceTitleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertApiPromRulesNamespaceTitleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertPrometheusConfigV1RulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertPrometheusConfigV1RulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConvertPrometheusConfigV1RulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertPrometheusConfigV1RulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertPrometheusConfigV1RulesNamespaceTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
