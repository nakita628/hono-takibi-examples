import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  deleteAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute,
  getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute,
  getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  getAccountsAccountIdFirewallAccessRulesRulesRoute,
  getAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute,
  patchAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute,
  patchAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute,
  postAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute,
  postAccountsAccountIdFirewallAccessRulesRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAccessRulesForAnAccountHandler = app
  .openapi(getAccountsAccountIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdFirewallAccessRulesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
