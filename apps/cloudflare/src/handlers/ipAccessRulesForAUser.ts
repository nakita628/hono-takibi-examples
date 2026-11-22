import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFirewallAccessRulesRulesRuleIdRoute,
  getUserFirewallAccessRulesRulesRoute,
  getUserFirewallAccessRulesRulesRuleIdRoute,
  patchUserFirewallAccessRulesRulesRuleIdRoute,
  postUserFirewallAccessRulesRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAccessRulesForAUserHandler = app
  .openapi(getUserFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
