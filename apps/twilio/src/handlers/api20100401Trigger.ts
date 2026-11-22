import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidUsageTriggersSidJsonRoute,
  get20100401AccountsAccountSidUsageTriggersJsonRoute,
  get20100401AccountsAccountSidUsageTriggersSidJsonRoute,
  post20100401AccountsAccountSidUsageTriggersJsonRoute,
  post20100401AccountsAccountSidUsageTriggersSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401TriggerHandler = app
  .openapi(get20100401AccountsAccountSidUsageTriggersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidUsageTriggersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidUsageTriggersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidUsageTriggersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidUsageTriggersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
