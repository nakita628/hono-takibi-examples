import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTailnetTailnetDnsConfigurationRoute,
  getTailnetTailnetDnsNameserversRoute,
  getTailnetTailnetDnsPreferencesRoute,
  getTailnetTailnetDnsSearchpathsRoute,
  getTailnetTailnetDnsSplitDnsRoute,
  patchTailnetTailnetDnsSplitDnsRoute,
  postTailnetTailnetDnsConfigurationRoute,
  postTailnetTailnetDnsNameserversRoute,
  postTailnetTailnetDnsPreferencesRoute,
  postTailnetTailnetDnsSearchpathsRoute,
  putTailnetTailnetDnsSplitDnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsHandler = app
  .openapi(getTailnetTailnetDnsNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsSearchpathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsSearchpathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
