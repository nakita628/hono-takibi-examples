import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmPropertyValidations202609ObjectTypeId(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['property-validations']['2026-09'][':objectTypeId'].$get(args, options),
  )
}

export async function getCrmPropertyValidations202609ObjectTypeIdPropertyName(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(
      args,
      options,
    ),
  )
}

export async function getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][
      ':ruleType'
    ].$get(args, options),
  )
}

export async function putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][
      ':ruleType'
    ].$put(args, options),
  )
}
