import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallAccessRulesRulesRuleIdRoute,
  getZonesZoneIdFirewallAccessRulesRulesRoute,
  patchZonesZoneIdFirewallAccessRulesRulesRuleIdRoute,
  postZonesZoneIdFirewallAccessRulesRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAccessRulesForAZoneHandler = app
  .openapi(getZonesZoneIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
