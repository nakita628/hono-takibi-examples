import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWellKnownOauthAuthorizationServer(options?: ClientRequestOptions) {
  return await parseResponse(
    client['.well-known']['oauth-authorization-server'].$get(undefined, options),
  )
}

export async function getWellKnownOauthProtectedResource(options?: ClientRequestOptions) {
  return await parseResponse(
    client['.well-known']['oauth-protected-resource'].$get(undefined, options),
  )
}

export async function get10dlcBrand(
  args: InferRequestType<(typeof client)['10dlc']['brand']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand.$get(args, options))
}

export async function post10dlcBrand(
  args: InferRequestType<(typeof client)['10dlc']['brand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand.$post(args, options))
}

export async function get10dlcBrandFeedbackBrandId(
  args: InferRequestType<(typeof client)['10dlc']['brand']['feedback'][':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand.feedback[':brandId'].$get(args, options))
}

export async function get10dlcBrandSmsOtpReferenceId(
  args: InferRequestType<(typeof client)['10dlc']['brand']['smsOtp'][':referenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand.smsOtp[':referenceId'].$get(args, options))
}

export async function get10dlcBrandBrandId(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].$get(args, options))
}

export async function put10dlcBrandBrandId(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].$put(args, options))
}

export async function delete10dlcBrandBrandId(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].$delete(args, options))
}

export async function post10dlcBrandBrandId2faEmail(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['2faEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId']['2faEmail'].$post(args, options))
}

export async function get10dlcBrandBrandIdExternalVetting(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['externalVetting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].externalVetting.$get(args, options))
}

export async function put10dlcBrandBrandIdExternalVetting(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['externalVetting']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].externalVetting.$put(args, options))
}

export async function post10dlcBrandBrandIdExternalVetting(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['externalVetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].externalVetting.$post(args, options))
}

export async function put10dlcBrandBrandIdRevet(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['revet']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].revet.$put(args, options))
}

export async function get10dlcBrandBrandIdSmsOtp(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['smsOtp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].smsOtp.$get(args, options))
}

export async function put10dlcBrandBrandIdSmsOtp(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['smsOtp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].smsOtp.$put(args, options))
}

export async function post10dlcBrandBrandIdSmsOtp(
  args: InferRequestType<(typeof client)['10dlc']['brand'][':brandId']['smsOtp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand[':brandId'].smsOtp.$post(args, options))
}

export async function get10dlcBrandFeedbackBrandId2(
  args: InferRequestType<(typeof client)['10dlc']['brand_feedback'][':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].brand_feedback[':brandId'].$get(args, options))
}

export async function get10dlcCampaign(
  args: InferRequestType<(typeof client)['10dlc']['campaign']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign.$get(args, options))
}

export async function post10dlcCampaignAcceptSharingCampaignId(
  args: InferRequestType<
    (typeof client)['10dlc']['campaign']['acceptSharing'][':campaignId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaign.acceptSharing[':campaignId'].$post(args, options),
  )
}

export async function get10dlcCampaignUsecaseCost(
  args: InferRequestType<(typeof client)['10dlc']['campaign']['usecase']['cost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign.usecase.cost.$get(args, options))
}

export async function get10dlcCampaignUsecaseCost2(
  args: InferRequestType<(typeof client)['10dlc']['campaign']['usecase_cost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign.usecase_cost.$get(args, options))
}

export async function get10dlcCampaignCampaignId(
  args: InferRequestType<(typeof client)['10dlc']['campaign'][':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign[':campaignId'].$get(args, options))
}

export async function put10dlcCampaignCampaignId(
  args: InferRequestType<(typeof client)['10dlc']['campaign'][':campaignId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign[':campaignId'].$put(args, options))
}

export async function delete10dlcCampaignCampaignId(
  args: InferRequestType<(typeof client)['10dlc']['campaign'][':campaignId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign[':campaignId'].$delete(args, options))
}

export async function post10dlcCampaignCampaignIdAppeal(
  args: InferRequestType<(typeof client)['10dlc']['campaign'][':campaignId']['appeal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign[':campaignId'].appeal.$post(args, options))
}

export async function get10dlcCampaignCampaignIdMnoMetadata(
  args: InferRequestType<
    (typeof client)['10dlc']['campaign'][':campaignId']['mnoMetadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaign[':campaignId'].mnoMetadata.$get(args, options),
  )
}

export async function get10dlcCampaignCampaignIdOperationStatus(
  args: InferRequestType<
    (typeof client)['10dlc']['campaign'][':campaignId']['operationStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaign[':campaignId'].operationStatus.$get(args, options),
  )
}

export async function get10dlcCampaignCampaignIdOsrAttributes(
  args: InferRequestType<
    (typeof client)['10dlc']['campaign'][':campaignId']['osr']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaign[':campaignId'].osr.attributes.$get(args, options),
  )
}

export async function get10dlcCampaignCampaignIdOsrAttributes2(
  args: InferRequestType<
    (typeof client)['10dlc']['campaign'][':campaignId']['osr_attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaign[':campaignId'].osr_attributes.$get(args, options),
  )
}

export async function get10dlcCampaignCampaignIdSharing(
  args: InferRequestType<(typeof client)['10dlc']['campaign'][':campaignId']['sharing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaign[':campaignId'].sharing.$get(args, options))
}

export async function post10dlcCampaignBuilder(
  args: InferRequestType<(typeof client)['10dlc']['campaignBuilder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].campaignBuilder.$post(args, options))
}

export async function get10dlcCampaignBuilderBrandBrandIdUsecaseUsecase(
  args: InferRequestType<
    (typeof client)['10dlc']['campaignBuilder']['brand'][':brandId']['usecase'][':usecase']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].campaignBuilder.brand[':brandId'].usecase[':usecase'].$get(args, options),
  )
}

export async function get10dlcEnumEndpoint(
  args: InferRequestType<(typeof client)['10dlc']['enum'][':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].enum[':endpoint'].$get(args, options))
}

export async function get10dlcPartnerCampaignSharedByMe(
  args: InferRequestType<(typeof client)['10dlc']['partnerCampaign']['sharedByMe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].partnerCampaign.sharedByMe.$get(args, options))
}

export async function get10dlcPartnerCampaignCampaignIdSharing(
  args: InferRequestType<
    (typeof client)['10dlc']['partnerCampaign'][':campaignId']['sharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].partnerCampaign[':campaignId'].sharing.$get(args, options),
  )
}

export async function get10dlcPartnerCampaigns(
  args: InferRequestType<(typeof client)['10dlc']['partner_campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].partner_campaigns.$get(args, options))
}

export async function get10dlcPartnerCampaignsCampaignId(
  args: InferRequestType<(typeof client)['10dlc']['partner_campaigns'][':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].partner_campaigns[':campaignId'].$get(args, options))
}

export async function patch10dlcPartnerCampaignsCampaignId(
  args: InferRequestType<(typeof client)['10dlc']['partner_campaigns'][':campaignId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].partner_campaigns[':campaignId'].$patch(args, options))
}

export async function post10dlcPhoneNumberAssignmentByProfile(
  args: InferRequestType<(typeof client)['10dlc']['phoneNumberAssignmentByProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].phoneNumberAssignmentByProfile.$post(args, options))
}

export async function get10dlcPhoneNumberAssignmentByProfileTaskId(
  args: InferRequestType<
    (typeof client)['10dlc']['phoneNumberAssignmentByProfile'][':taskId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].phoneNumberAssignmentByProfile[':taskId'].$get(args, options),
  )
}

export async function get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbers(
  args: InferRequestType<
    (typeof client)['10dlc']['phoneNumberAssignmentByProfile'][':taskId']['phoneNumbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].phoneNumberAssignmentByProfile[':taskId'].phoneNumbers.$get(args, options),
  )
}

export async function get10dlcPhoneNumberCampaigns(
  args: InferRequestType<(typeof client)['10dlc']['phone_number_campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].phone_number_campaigns.$get(args, options))
}

export async function post10dlcPhoneNumberCampaigns(
  args: InferRequestType<(typeof client)['10dlc']['phone_number_campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['10dlc'].phone_number_campaigns.$post(args, options))
}

export async function get10dlcPhoneNumberCampaignsPhoneNumber(
  args: InferRequestType<
    (typeof client)['10dlc']['phone_number_campaigns'][':phoneNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].phone_number_campaigns[':phoneNumber'].$get(args, options),
  )
}

export async function put10dlcPhoneNumberCampaignsPhoneNumber(
  args: InferRequestType<
    (typeof client)['10dlc']['phone_number_campaigns'][':phoneNumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].phone_number_campaigns[':phoneNumber'].$put(args, options),
  )
}

export async function delete10dlcPhoneNumberCampaignsPhoneNumber(
  args: InferRequestType<
    (typeof client)['10dlc']['phone_number_campaigns'][':phoneNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['10dlc'].phone_number_campaigns[':phoneNumber'].$delete(args, options),
  )
}

export async function getAccessIpAddress(
  args: InferRequestType<typeof client.access_ip_address.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_address.$get(args, options))
}

export async function postAccessIpAddress(
  args: InferRequestType<typeof client.access_ip_address.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_address.$post(args, options))
}

export async function getAccessIpAddressAccessIpAddressId(
  args: InferRequestType<(typeof client.access_ip_address)[':access_ip_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_address[':access_ip_address_id'].$get(args, options))
}

export async function deleteAccessIpAddressAccessIpAddressId(
  args: InferRequestType<(typeof client.access_ip_address)[':access_ip_address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.access_ip_address[':access_ip_address_id'].$delete(args, options),
  )
}

export async function getAccessIpRanges(
  args: InferRequestType<typeof client.access_ip_ranges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_ranges.$get(args, options))
}

export async function postAccessIpRanges(
  args: InferRequestType<typeof client.access_ip_ranges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_ranges.$post(args, options))
}

export async function deleteAccessIpRangesAccessIpRangeId(
  args: InferRequestType<(typeof client.access_ip_ranges)[':access_ip_range_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_ip_ranges[':access_ip_range_id'].$delete(args, options))
}

export async function postActionsPurchaseEsims(
  args: InferRequestType<typeof client.actions.purchase.esims.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.purchase.esims.$post(args, options))
}

export async function postActionsRegisterSimCards(
  args: InferRequestType<typeof client.actions.register.sim_cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.register.sim_cards.$post(args, options))
}

export async function getAddresses(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$get(args, options))
}

export async function postAddresses(
  args: InferRequestType<typeof client.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$post(args, options))
}

export async function postAddressesActionsValidate(
  args: InferRequestType<typeof client.addresses.actions.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.actions.validate.$post(args, options))
}

export async function getAddressesId(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':id'].$get(args, options))
}

export async function deleteAddressesId(
  args: InferRequestType<(typeof client.addresses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':id'].$delete(args, options))
}

export async function postAddressesIdActionsAcceptSuggestions(
  args: InferRequestType<
    (typeof client.addresses)[':id']['actions']['accept_suggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.addresses[':id'].actions.accept_suggestions.$post(args, options),
  )
}

export async function getAdvancedOrders(options?: ClientRequestOptions) {
  return await parseResponse(client.advanced_orders.$get(undefined, options))
}

export async function postAdvancedOrders(
  args: InferRequestType<typeof client.advanced_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced_orders.$post(args, options))
}

export async function patchAdvancedOrdersAdvancedOrderIdRequirementGroup(
  args: InferRequestType<
    (typeof client.advanced_orders)[':advanced-order-id']['requirement_group']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.advanced_orders[':advanced-order-id'].requirement_group.$patch(args, options),
  )
}

export async function getAdvancedOrdersOrderId(
  args: InferRequestType<(typeof client.advanced_orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced_orders[':order_id'].$get(args, options))
}

export async function getAgentGateways(
  args: InferRequestType<typeof client.agent_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways.$get(args, options))
}

export async function postAgentGateways(
  args: InferRequestType<typeof client.agent_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways.$post(args, options))
}

export async function getAgentGatewaysInstanceId(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].$get(args, options))
}

export async function deleteAgentGatewaysInstanceId(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].$delete(args, options))
}

export async function getAgentGatewaysInstanceIdApis(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['apis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].apis.$get(args, options))
}

export async function postAgentGatewaysInstanceIdApis(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['apis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].apis.$post(args, options))
}

export async function deleteAgentGatewaysInstanceIdApisApiId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['apis'][':api_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].apis[':api_id'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdApisApiId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['apis'][':api_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].apis[':api_id'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdGuardrails(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['guardrails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].guardrails.$get(args, options))
}

export async function postAgentGatewaysInstanceIdGuardrails(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['guardrails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].guardrails.$post(args, options))
}

export async function deleteAgentGatewaysInstanceIdGuardrailsGuardrailId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['guardrails'][':guardrail_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].guardrails[':guardrail_id'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdGuardrailsGuardrailId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['guardrails'][':guardrail_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].guardrails[':guardrail_id'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdKeys(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].keys.$get(args, options))
}

export async function postAgentGatewaysInstanceIdKeys(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].keys.$post(args, options))
}

export async function deleteAgentGatewaysInstanceIdKeysKeyId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].keys[':key_id'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdKeysKeyId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['keys'][':key_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].keys[':key_id'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdKeysKeyIdToolPermissions(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['keys'][':key_id']['tool_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].keys[':key_id'].tool_permissions.$get(args, options),
  )
}

export async function putAgentGatewaysInstanceIdKeysKeyIdToolPermissions(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['keys'][':key_id']['tool_permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].keys[':key_id'].tool_permissions.$put(args, options),
  )
}

export async function getAgentGatewaysInstanceIdMcpServers(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['mcp_servers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].mcp_servers.$get(args, options))
}

export async function postAgentGatewaysInstanceIdMcpServers(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['mcp_servers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].mcp_servers.$post(args, options))
}

export async function deleteAgentGatewaysInstanceIdMcpServersServerId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['mcp_servers'][':server_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].mcp_servers[':server_id'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdMcpServersServerId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['mcp_servers'][':server_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].mcp_servers[':server_id'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdModels(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].models.$get(args, options))
}

export async function getAgentGatewaysInstanceIdPolicies(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].policies.$get(args, options))
}

export async function postAgentGatewaysInstanceIdPolicies(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].policies.$post(args, options))
}

export async function getAgentGatewaysInstanceIdPoliciesName(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policies[':name'].$get(args, options),
  )
}

export async function deleteAgentGatewaysInstanceIdPoliciesName(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policies'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policies[':name'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdPoliciesName(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policies'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policies[':name'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdPolicyAttachments(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policy_attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policy_attachments.$get(args, options),
  )
}

export async function postAgentGatewaysInstanceIdPolicyAttachments(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policy_attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policy_attachments.$post(args, options),
  )
}

export async function deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['policy_attachments'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].policy_attachments[':attachment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAgentGatewaysInstanceIdSpendLogs(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['spend_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].spend_logs.$get(args, options))
}

export async function getAgentGatewaysInstanceIdTeams(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].teams.$get(args, options))
}

export async function postAgentGatewaysInstanceIdTeams(
  args: InferRequestType<(typeof client.agent_gateways)[':instance_id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_gateways[':instance_id'].teams.$post(args, options))
}

export async function deleteAgentGatewaysInstanceIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['teams'][':team_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].teams[':team_id'].$delete(args, options),
  )
}

export async function patchAgentGatewaysInstanceIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['teams'][':team_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].teams[':team_id'].$patch(args, options),
  )
}

export async function getAgentGatewaysInstanceIdTeamsTeamIdToolPermissions(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['teams'][':team_id']['tool_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].teams[':team_id'].tool_permissions.$get(args, options),
  )
}

export async function putAgentGatewaysInstanceIdTeamsTeamIdToolPermissions(
  args: InferRequestType<
    (typeof client.agent_gateways)[':instance_id']['teams'][':team_id']['tool_permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agent_gateways[':instance_id'].teams[':team_id'].tool_permissions.$put(args, options),
  )
}

export async function postAiAnthropicV1Messages(
  args: InferRequestType<typeof client.ai.anthropic.v1.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.anthropic.v1.messages.$post(args, options))
}

export async function getAiAssistants(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.assistants.$get(undefined, options))
}

export async function postAiAssistants(
  args: InferRequestType<typeof client.ai.assistants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.$post(args, options))
}

export async function getAiAssistantsDeleted(
  args: InferRequestType<typeof client.ai.assistants.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.deleted.$get(args, options))
}

export async function postAiAssistantsImport(
  args: InferRequestType<typeof client.ai.assistants.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.import.$post(args, options))
}

export async function getAiAssistantsTags(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.assistants.tags.$get(undefined, options))
}

export async function getAiAssistantsTests(
  args: InferRequestType<typeof client.ai.assistants.tests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests.$get(args, options))
}

export async function postAiAssistantsTests(
  args: InferRequestType<typeof client.ai.assistants.tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests.$post(args, options))
}

export async function getAiAssistantsTestsTestSuites(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.assistants.tests['test-suites'].$get(undefined, options))
}

export async function getAiAssistantsTestsTestSuitesSuiteNameRuns(
  args: InferRequestType<
    (typeof client.ai.assistants.tests)['test-suites'][':suite_name']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants.tests['test-suites'][':suite_name'].runs.$get(args, options),
  )
}

export async function postAiAssistantsTestsTestSuitesSuiteNameRuns(
  args: InferRequestType<
    (typeof client.ai.assistants.tests)['test-suites'][':suite_name']['runs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants.tests['test-suites'][':suite_name'].runs.$post(args, options),
  )
}

export async function getAiAssistantsTestsTestId(
  args: InferRequestType<(typeof client.ai.assistants.tests)[':test_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests[':test_id'].$get(args, options))
}

export async function putAiAssistantsTestsTestId(
  args: InferRequestType<(typeof client.ai.assistants.tests)[':test_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests[':test_id'].$put(args, options))
}

export async function deleteAiAssistantsTestsTestId(
  args: InferRequestType<(typeof client.ai.assistants.tests)[':test_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests[':test_id'].$delete(args, options))
}

export async function getAiAssistantsTestsTestIdRuns(
  args: InferRequestType<(typeof client.ai.assistants.tests)[':test_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests[':test_id'].runs.$get(args, options))
}

export async function postAiAssistantsTestsTestIdRuns(
  args: InferRequestType<(typeof client.ai.assistants.tests)[':test_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants.tests[':test_id'].runs.$post(args, options))
}

export async function getAiAssistantsTestsTestIdRunsRunId(
  args: InferRequestType<
    (typeof client.ai.assistants.tests)[':test_id']['runs'][':run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants.tests[':test_id'].runs[':run_id'].$get(args, options),
  )
}

export async function getAiAssistantsAssistantId(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].$get(args, options))
}

export async function postAiAssistantsAssistantId(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].$post(args, options))
}

export async function deleteAiAssistantsAssistantId(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].$delete(args, options))
}

export async function getAiAssistantsAssistantIdCanaryDeploys(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['canary-deploys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id']['canary-deploys'].$get(args, options),
  )
}

export async function putAiAssistantsAssistantIdCanaryDeploys(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['canary-deploys']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id']['canary-deploys'].$put(args, options),
  )
}

export async function postAiAssistantsAssistantIdCanaryDeploys(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['canary-deploys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id']['canary-deploys'].$post(args, options),
  )
}

export async function deleteAiAssistantsAssistantIdCanaryDeploys(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['canary-deploys']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id']['canary-deploys'].$delete(args, options),
  )
}

export async function postAiAssistantsAssistantIdChat(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].chat.$post(args, options))
}

export async function postAiAssistantsAssistantIdChatSms(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['chat']['sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].chat.sms.$post(args, options))
}

export async function postAiAssistantsAssistantIdChatWhatsapp(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['chat']['whatsapp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].chat.whatsapp.$post(args, options),
  )
}

export async function postAiAssistantsAssistantIdClone(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].clone.$post(args, options))
}

export async function getAiAssistantsAssistantIdDeleted(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['deleted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].deleted.$get(args, options))
}

export async function postAiAssistantsAssistantIdInstructionsEnhance(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['instructions']['enhance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].instructions.enhance.$post(args, options),
  )
}

export async function postAiAssistantsAssistantIdRestore(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].restore.$post(args, options))
}

export async function getAiAssistantsAssistantIdScheduledEvents(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['scheduled_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].scheduled_events.$get(args, options),
  )
}

export async function postAiAssistantsAssistantIdScheduledEvents(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['scheduled_events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].scheduled_events.$post(args, options),
  )
}

export async function getAiAssistantsAssistantIdScheduledEventsEventId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['scheduled_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].scheduled_events[':event_id'].$get(args, options),
  )
}

export async function deleteAiAssistantsAssistantIdScheduledEventsEventId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['scheduled_events'][':event_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].scheduled_events[':event_id'].$delete(args, options),
  )
}

export async function postAiAssistantsAssistantIdTags(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].tags.$post(args, options))
}

export async function deleteAiAssistantsAssistantIdTagsTag(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['tags'][':tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].tags[':tag'].$delete(args, options),
  )
}

export async function getAiAssistantsAssistantIdTexml(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['texml']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].texml.$get(args, options))
}

export async function putAiAssistantsAssistantIdToolsToolId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['tools'][':tool_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].tools[':tool_id'].$put(args, options),
  )
}

export async function deleteAiAssistantsAssistantIdToolsToolId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['tools'][':tool_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].tools[':tool_id'].$delete(args, options),
  )
}

export async function postAiAssistantsAssistantIdToolsToolIdTest(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['tools'][':tool_id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].tools[':tool_id'].test.$post(args, options),
  )
}

export async function getAiAssistantsAssistantIdVersions(
  args: InferRequestType<(typeof client.ai.assistants)[':assistant_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.assistants[':assistant_id'].versions.$get(args, options))
}

export async function getAiAssistantsAssistantIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].versions[':version_id'].$get(args, options),
  )
}

export async function postAiAssistantsAssistantIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['versions'][':version_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].versions[':version_id'].$post(args, options),
  )
}

export async function deleteAiAssistantsAssistantIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['versions'][':version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].versions[':version_id'].$delete(args, options),
  )
}

export async function postAiAssistantsAssistantIdVersionsVersionIdPromote(
  args: InferRequestType<
    (typeof client.ai.assistants)[':assistant_id']['versions'][':version_id']['promote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.assistants[':assistant_id'].versions[':version_id'].promote.$post(args, options),
  )
}

export async function postAiAudioTranscriptions(
  args: InferRequestType<typeof client.ai.audio.transcriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.audio.transcriptions.$post(args, options))
}

export async function getAiAvatars(
  args: InferRequestType<typeof client.ai.avatars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.avatars.$get(args, options))
}

export async function postAiAvatars(
  args: InferRequestType<typeof client.ai.avatars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.avatars.$post(args, options))
}

export async function getAiAvatarsAvatarId(
  args: InferRequestType<(typeof client.ai.avatars)[':avatar_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.avatars[':avatar_id'].$get(args, options))
}

export async function patchAiAvatarsAvatarId(
  args: InferRequestType<(typeof client.ai.avatars)[':avatar_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.avatars[':avatar_id'].$patch(args, options))
}

export async function postAiChatCompletions(
  args: InferRequestType<typeof client.ai.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.chat.completions.$post(args, options))
}

export async function getAiClusters(
  args: InferRequestType<typeof client.ai.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.clusters.$get(args, options))
}

export async function postAiClusters(
  args: InferRequestType<typeof client.ai.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.clusters.$post(args, options))
}

export async function getAiClustersTaskId(
  args: InferRequestType<(typeof client.ai.clusters)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.clusters[':task_id'].$get(args, options))
}

export async function deleteAiClustersTaskId(
  args: InferRequestType<(typeof client.ai.clusters)[':task_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.clusters[':task_id'].$delete(args, options))
}

export async function getAiClustersTaskIdGraph(
  args: InferRequestType<(typeof client.ai.clusters)[':task_id']['graph']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.clusters[':task_id'].graph.$get(args, options))
}

export async function getAiCollections(
  args: InferRequestType<typeof client.ai.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections.$get(args, options))
}

export async function postAiCollections(
  args: InferRequestType<typeof client.ai.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections.$post(args, options))
}

export async function getAiCollectionsSlugSlug(
  args: InferRequestType<(typeof client.ai.collections.slug)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections.slug[':slug'].$get(args, options))
}

export async function getAiCollectionsUuid(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].$get(args, options))
}

export async function deleteAiCollectionsUuid(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].$delete(args, options))
}

export async function patchAiCollectionsUuid(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].$patch(args, options))
}

export async function getAiCollectionsUuidSettings(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].settings.$get(args, options))
}

export async function putAiCollectionsUuidSettings(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].settings.$put(args, options))
}

export async function patchAiCollectionsUuidSettings(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].settings.$patch(args, options))
}

export async function getAiCollectionsUuidSources(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].sources.$get(args, options))
}

export async function putAiCollectionsUuidSources(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['sources']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].sources.$put(args, options))
}

export async function postAiCollectionsUuidSources(
  args: InferRequestType<(typeof client.ai.collections)[':uuid']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.collections[':uuid'].sources.$post(args, options))
}

export async function deleteAiCollectionsUuidSourcesSourceId(
  args: InferRequestType<
    (typeof client.ai.collections)[':uuid']['sources'][':sourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.collections[':uuid'].sources[':sourceId'].$delete(args, options),
  )
}

export async function getAiConversationHistories(
  args: InferRequestType<typeof client.ai.conversation_histories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversation_histories.$get(args, options))
}

export async function getAiConversations(
  args: InferRequestType<typeof client.ai.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.$get(args, options))
}

export async function postAiConversations(
  args: InferRequestType<typeof client.ai.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.$post(args, options))
}

export async function getAiConversationsConversationInsightsAggregates(
  args: InferRequestType<
    (typeof client.ai.conversations)['conversation-insights']['aggregates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['conversation-insights'].aggregates.$get(args, options),
  )
}

export async function getAiConversationsInsightGroups(
  args: InferRequestType<(typeof client.ai.conversations)['insight-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations['insight-groups'].$get(args, options))
}

export async function postAiConversationsInsightGroups(
  args: InferRequestType<(typeof client.ai.conversations)['insight-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations['insight-groups'].$post(args, options))
}

export async function getAiConversationsInsightGroupsGroupId(
  args: InferRequestType<(typeof client.ai.conversations)['insight-groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['insight-groups'][':group_id'].$get(args, options),
  )
}

export async function putAiConversationsInsightGroupsGroupId(
  args: InferRequestType<(typeof client.ai.conversations)['insight-groups'][':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['insight-groups'][':group_id'].$put(args, options),
  )
}

export async function deleteAiConversationsInsightGroupsGroupId(
  args: InferRequestType<
    (typeof client.ai.conversations)['insight-groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['insight-groups'][':group_id'].$delete(args, options),
  )
}

export async function postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssign(
  args: InferRequestType<
    (typeof client.ai.conversations)['insight-groups'][':group_id']['insights'][':insight_id']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['insight-groups'][':group_id'].insights[':insight_id'].assign.$post(
      args,
      options,
    ),
  )
}

export async function deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassign(
  args: InferRequestType<
    (typeof client.ai.conversations)['insight-groups'][':group_id']['insights'][':insight_id']['unassign']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations['insight-groups'][':group_id'].insights[':insight_id'].unassign.$delete(
      args,
      options,
    ),
  )
}

export async function getAiConversationsInsights(
  args: InferRequestType<typeof client.ai.conversations.insights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.insights.$get(args, options))
}

export async function postAiConversationsInsights(
  args: InferRequestType<typeof client.ai.conversations.insights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.insights.$post(args, options))
}

export async function getAiConversationsInsightsInsightId(
  args: InferRequestType<(typeof client.ai.conversations.insights)[':insight_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.insights[':insight_id'].$get(args, options))
}

export async function putAiConversationsInsightsInsightId(
  args: InferRequestType<(typeof client.ai.conversations.insights)[':insight_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.insights[':insight_id'].$put(args, options))
}

export async function deleteAiConversationsInsightsInsightId(
  args: InferRequestType<(typeof client.ai.conversations.insights)[':insight_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations.insights[':insight_id'].$delete(args, options))
}

export async function getAiConversationsConversationId(
  args: InferRequestType<(typeof client.ai.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations[':conversation_id'].$get(args, options))
}

export async function putAiConversationsConversationId(
  args: InferRequestType<(typeof client.ai.conversations)[':conversation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations[':conversation_id'].$put(args, options))
}

export async function deleteAiConversationsConversationId(
  args: InferRequestType<(typeof client.ai.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.conversations[':conversation_id'].$delete(args, options))
}

export async function getAiConversationsConversationIdConversationsInsights(
  args: InferRequestType<
    (typeof client.ai.conversations)[':conversation_id']['conversations-insights']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations[':conversation_id']['conversations-insights'].$get(args, options),
  )
}

export async function deleteAiConversationsConversationIdConversationsInsightsInsightId(
  args: InferRequestType<
    (typeof client.ai.conversations)[':conversation_id']['conversations-insights'][':insight_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations[':conversation_id']['conversations-insights'][':insight_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postAiConversationsConversationIdMessage(
  args: InferRequestType<(typeof client.ai.conversations)[':conversation_id']['message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations[':conversation_id'].message.$post(args, options),
  )
}

export async function getAiConversationsConversationIdMessages(
  args: InferRequestType<(typeof client.ai.conversations)[':conversation_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.conversations[':conversation_id'].messages.$get(args, options),
  )
}

export async function getAiEmbeddings(
  args: InferRequestType<typeof client.ai.embeddings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings.$get(args, options))
}

export async function postAiEmbeddings(
  args: InferRequestType<typeof client.ai.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings.$post(args, options))
}

export async function getAiEmbeddingsBuckets(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.embeddings.buckets.$get(undefined, options))
}

export async function getAiEmbeddingsBucketsBucketName(
  args: InferRequestType<(typeof client.ai.embeddings.buckets)[':bucket_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings.buckets[':bucket_name'].$get(args, options))
}

export async function deleteAiEmbeddingsBucketsBucketName(
  args: InferRequestType<(typeof client.ai.embeddings.buckets)[':bucket_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings.buckets[':bucket_name'].$delete(args, options))
}

export async function postAiEmbeddingsSimilaritySearch(
  args: InferRequestType<(typeof client.ai.embeddings)['similarity-search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings['similarity-search'].$post(args, options))
}

export async function postAiEmbeddingsUrl(
  args: InferRequestType<typeof client.ai.embeddings.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings.url.$post(args, options))
}

export async function getAiEmbeddingsTaskId(
  args: InferRequestType<(typeof client.ai.embeddings)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.embeddings[':task_id'].$get(args, options))
}

export async function getAiIntegrations(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.integrations.$get(undefined, options))
}

export async function getAiIntegrationsConnections(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.integrations.connections.$get(undefined, options))
}

export async function getAiIntegrationsConnectionsUserConnectionId(
  args: InferRequestType<
    (typeof client.ai.integrations.connections)[':user_connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.integrations.connections[':user_connection_id'].$get(args, options),
  )
}

export async function deleteAiIntegrationsConnectionsUserConnectionId(
  args: InferRequestType<
    (typeof client.ai.integrations.connections)[':user_connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.integrations.connections[':user_connection_id'].$delete(args, options),
  )
}

export async function getAiIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.ai.integrations)[':integration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.integrations[':integration_id'].$get(args, options))
}

export async function getAiKnowledgeCollectionsSlugDocuments(
  args: InferRequestType<(typeof client.ai.knowledge.collections)[':slug']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.knowledge.collections[':slug'].documents.$get(args, options))
}

export async function getAiMcpServers(
  args: InferRequestType<typeof client.ai.mcp_servers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.mcp_servers.$get(args, options))
}

export async function postAiMcpServers(
  args: InferRequestType<typeof client.ai.mcp_servers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.mcp_servers.$post(args, options))
}

export async function getAiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.ai.mcp_servers)[':mcp_server_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.mcp_servers[':mcp_server_id'].$get(args, options))
}

export async function putAiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.ai.mcp_servers)[':mcp_server_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.mcp_servers[':mcp_server_id'].$put(args, options))
}

export async function deleteAiMcpServersMcpServerId(
  args: InferRequestType<(typeof client.ai.mcp_servers)[':mcp_server_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.mcp_servers[':mcp_server_id'].$delete(args, options))
}

export async function getAiMemoryNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.memory.namespaces.$get(undefined, options))
}

export async function postAiMemoryNamespaces(
  args: InferRequestType<typeof client.ai.memory.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.memory.namespaces.$post(args, options))
}

export async function deleteAiMemoryNamespacesNamespace(
  args: InferRequestType<(typeof client.ai.memory.namespaces)[':namespace']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.memory.namespaces[':namespace'].$delete(args, options))
}

export async function getAiMemoryNamespacesNamespaceOperationsOperationId(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['operations'][':operation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].operations[':operation_id'].$get(args, options),
  )
}

export async function getAiMemoryNamespacesNamespaceProfiles(
  args: InferRequestType<(typeof client.ai.memory.namespaces)[':namespace']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.memory.namespaces[':namespace'].profiles.$get(args, options))
}

export async function deleteAiMemoryNamespacesNamespaceProfilesProfileId(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].$delete(args, options),
  )
}

export async function postAiMemoryNamespacesNamespaceProfilesProfileIdIngest(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['ingest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].ingest.$post(args, options),
  )
}

export async function getAiMemoryNamespacesNamespaceProfilesProfileIdMemories(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['memories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].memories.$get(args, options),
  )
}

export async function getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryId(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['memories'][':memory_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].memories[':memory_id'].$get(
      args,
      options,
    ),
  )
}

export async function postAiMemoryNamespacesNamespaceProfilesProfileIdRecall(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['recall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].recall.$post(args, options),
  )
}

export async function postAiMemoryNamespacesNamespaceProfilesProfileIdRemember(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['remember']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].remember.$post(args, options),
  )
}

export async function getAiMemoryNamespacesNamespaceProfilesProfileIdSources(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].sources.$get(args, options),
  )
}

export async function getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceId(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['sources'][':source_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].sources[':source_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceId(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['sources'][':source_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].sources[':source_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAiMemoryNamespacesNamespaceProfilesProfileIdSummary(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].summary.$get(args, options),
  )
}

export async function postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreview(
  args: InferRequestType<
    (typeof client.ai.memory.namespaces)[':namespace']['profiles'][':profile_id']['summary']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].profiles[':profile_id'].summary.preview.$post(
      args,
      options,
    ),
  )
}

export async function getAiMemoryNamespacesNamespaceSettings(
  args: InferRequestType<(typeof client.ai.memory.namespaces)[':namespace']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.memory.namespaces[':namespace'].settings.$get(args, options))
}

export async function patchAiMemoryNamespacesNamespaceSettings(
  args: InferRequestType<(typeof client.ai.memory.namespaces)[':namespace']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.memory.namespaces[':namespace'].settings.$patch(args, options),
  )
}

export async function getAiMissions(
  args: InferRequestType<typeof client.ai.missions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions.$get(args, options))
}

export async function postAiMissions(
  args: InferRequestType<typeof client.ai.missions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions.$post(args, options))
}

export async function getAiMissionsEvents(
  args: InferRequestType<typeof client.ai.missions.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions.events.$get(args, options))
}

export async function getAiMissionsRuns(
  args: InferRequestType<typeof client.ai.missions.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions.runs.$get(args, options))
}

export async function getAiMissionsMissionId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].$get(args, options))
}

export async function putAiMissionsMissionId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].$put(args, options))
}

export async function deleteAiMissionsMissionId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].$delete(args, options))
}

export async function postAiMissionsMissionIdClone(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].clone.$post(args, options))
}

export async function getAiMissionsMissionIdKnowledgeBases(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['knowledge-bases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['knowledge-bases'].$get(args, options),
  )
}

export async function postAiMissionsMissionIdKnowledgeBases(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['knowledge-bases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['knowledge-bases'].$post(args, options),
  )
}

export async function getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['knowledge-bases'][':knowledge_base_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['knowledge-bases'][':knowledge_base_id'].$get(args, options),
  )
}

export async function putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['knowledge-bases'][':knowledge_base_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['knowledge-bases'][':knowledge_base_id'].$put(args, options),
  )
}

export async function deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['knowledge-bases'][':knowledge_base_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['knowledge-bases'][':knowledge_base_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAiMissionsMissionIdMcpServers(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['mcp-servers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id']['mcp-servers'].$get(args, options))
}

export async function postAiMissionsMissionIdMcpServers(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['mcp-servers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id']['mcp-servers'].$post(args, options))
}

export async function getAiMissionsMissionIdMcpServersMcpServerId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['mcp-servers'][':mcp_server_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['mcp-servers'][':mcp_server_id'].$get(args, options),
  )
}

export async function putAiMissionsMissionIdMcpServersMcpServerId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['mcp-servers'][':mcp_server_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['mcp-servers'][':mcp_server_id'].$put(args, options),
  )
}

export async function deleteAiMissionsMissionIdMcpServersMcpServerId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['mcp-servers'][':mcp_server_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id']['mcp-servers'][':mcp_server_id'].$delete(args, options),
  )
}

export async function getAiMissionsMissionIdRuns(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].runs.$get(args, options))
}

export async function postAiMissionsMissionIdRuns(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].runs.$post(args, options))
}

export async function getAiMissionsMissionIdRunsRunId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].runs[':run_id'].$get(args, options))
}

export async function patchAiMissionsMissionIdRunsRunId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['runs'][':run_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].$patch(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdCancel(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].cancel.$post(args, options),
  )
}

export async function getAiMissionsMissionIdRunsRunIdEvents(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].events.$get(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdEvents(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].events.$post(args, options),
  )
}

export async function getAiMissionsMissionIdRunsRunIdEventsEventId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].events[':event_id'].$get(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdPause(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].pause.$post(args, options),
  )
}

export async function getAiMissionsMissionIdRunsRunIdPlan(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].plan.$get(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdPlan(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['plan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].plan.$post(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdPlanSteps(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['plan']['steps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].plan.steps.$post(args, options),
  )
}

export async function getAiMissionsMissionIdRunsRunIdPlanStepsStepId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['plan']['steps'][':step_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].plan.steps[':step_id'].$get(args, options),
  )
}

export async function patchAiMissionsMissionIdRunsRunIdPlanStepsStepId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['plan']['steps'][':step_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].plan.steps[':step_id'].$patch(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdResume(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id'].resume.$post(args, options),
  )
}

export async function getAiMissionsMissionIdRunsRunIdTelnyxAgents(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['telnyx-agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id']['telnyx-agents'].$get(args, options),
  )
}

export async function postAiMissionsMissionIdRunsRunIdTelnyxAgents(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['telnyx-agents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id']['telnyx-agents'].$post(args, options),
  )
}

export async function deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['runs'][':run_id']['telnyx-agents'][':telnyx_agent_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].runs[':run_id']['telnyx-agents'][':telnyx_agent_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAiMissionsMissionIdTools(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].tools.$get(args, options))
}

export async function postAiMissionsMissionIdTools(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['tools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.missions[':mission_id'].tools.$post(args, options))
}

export async function getAiMissionsMissionIdToolsToolId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['tools'][':tool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].tools[':tool_id'].$get(args, options),
  )
}

export async function putAiMissionsMissionIdToolsToolId(
  args: InferRequestType<(typeof client.ai.missions)[':mission_id']['tools'][':tool_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].tools[':tool_id'].$put(args, options),
  )
}

export async function deleteAiMissionsMissionIdToolsToolId(
  args: InferRequestType<
    (typeof client.ai.missions)[':mission_id']['tools'][':tool_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.missions[':mission_id'].tools[':tool_id'].$delete(args, options),
  )
}

export async function getAiModels(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.models.$get(undefined, options))
}

export async function postAiOpenaiChatCompletions(
  args: InferRequestType<typeof client.ai.openai.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.openai.chat.completions.$post(args, options))
}

export async function postAiOpenaiEmbeddings(
  args: InferRequestType<typeof client.ai.openai.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.openai.embeddings.$post(args, options))
}

export async function getAiOpenaiEmbeddingsModels(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.openai.embeddings.models.$get(undefined, options))
}

export async function getAiOpenaiModels(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.openai.models.$get(undefined, options))
}

export async function postAiOpenaiResponses(
  args: InferRequestType<typeof client.ai.openai.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.openai.responses.$post(args, options))
}

export async function postAiResponses(
  args: InferRequestType<typeof client.ai.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.responses.$post(args, options))
}

export async function postAiSummarize(
  args: InferRequestType<typeof client.ai.summarize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.summarize.$post(args, options))
}

export async function getAiTestsSchedulesV1CronJobs(
  args: InferRequestType<(typeof client.ai.tests.schedules.v1)['cron-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.schedules.v1['cron-jobs'].$get(args, options))
}

export async function postAiTestsSchedulesV1CronJobs(
  args: InferRequestType<(typeof client.ai.tests.schedules.v1)['cron-jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.schedules.v1['cron-jobs'].$post(args, options))
}

export async function getAiTestsSchedulesV1CronJobsId(
  args: InferRequestType<(typeof client.ai.tests.schedules.v1)['cron-jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.schedules.v1['cron-jobs'][':id'].$get(args, options))
}

export async function deleteAiTestsSchedulesV1CronJobsId(
  args: InferRequestType<(typeof client.ai.tests.schedules.v1)['cron-jobs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.schedules.v1['cron-jobs'][':id'].$delete(args, options),
  )
}

export async function patchAiTestsSchedulesV1CronJobsId(
  args: InferRequestType<(typeof client.ai.tests.schedules.v1)['cron-jobs'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.schedules.v1['cron-jobs'][':id'].$patch(args, options))
}

export async function getAiTestsTestFrameworkV1Aiagents(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.aiagents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.aiagents.$get(args, options))
}

export async function postAiTestsTestFrameworkV1Aiagents(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.aiagents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.aiagents.$post(args, options))
}

export async function getAiTestsTestFrameworkV1AiagentsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.aiagents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.aiagents[':id'].$get(args, options))
}

export async function putAiTestsTestFrameworkV1AiagentsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.aiagents)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.aiagents[':id'].$put(args, options))
}

export async function deleteAiTestsTestFrameworkV1AiagentsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.aiagents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.aiagents[':id'].$delete(args, options),
  )
}

export async function getAiTestsTestFrameworkV1Metrics(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.metrics.$get(args, options))
}

export async function postAiTestsTestFrameworkV1Metrics(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.metrics.$post(args, options))
}

export async function postAiTestsTestFrameworkV1MetricsBulkCreate(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.metrics.bulk_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.metrics.bulk_create.$post(args, options),
  )
}

export async function postAiTestsTestFrameworkV1MetricsGenerateMetrics(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.metrics.generate_metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.metrics.generate_metrics.$post(args, options),
  )
}

export async function getAiTestsTestFrameworkV1MetricsGenerateMetricsProgress(
  args: InferRequestType<
    typeof client.ai.tests.test_framework.v1.metrics.generate_metrics_progress.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.metrics.generate_metrics_progress.$get(args, options),
  )
}

export async function getAiTestsTestFrameworkV1MetricsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.metrics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.metrics[':id'].$get(args, options))
}

export async function deleteAiTestsTestFrameworkV1MetricsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.metrics)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.metrics[':id'].$delete(args, options),
  )
}

export async function patchAiTestsTestFrameworkV1MetricsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.metrics)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.metrics[':id'].$patch(args, options))
}

export async function getAiTestsTestFrameworkV1Personalities(options?: ClientRequestOptions) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.personalities.$get(undefined, options),
  )
}

export async function getAiTestsTestFrameworkV1Results(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.results.$get(args, options))
}

export async function getAiTestsTestFrameworkV1ResultsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.results[':id'].$get(args, options))
}

export async function deleteAiTestsTestFrameworkV1ResultsId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.results)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.results[':id'].$delete(args, options),
  )
}

export async function postAiTestsTestFrameworkV1ResultsIdRerun(
  args: InferRequestType<
    (typeof client.ai.tests.test_framework.v1.results)[':id']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.results[':id'].rerun.$post(args, options),
  )
}

export async function getAiTestsTestFrameworkV1Scenarios(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.scenarios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.scenarios.$get(args, options))
}

export async function postAiTestsTestFrameworkV1Scenarios(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.scenarios.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.scenarios.$post(args, options))
}

export async function getAiTestsTestFrameworkV1ScenariosExportScenarios(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.scenarios.export_scenarios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios.export_scenarios.$get(args, options),
  )
}

export async function postAiTestsTestFrameworkV1ScenariosGenerateBg(
  args: InferRequestType<
    (typeof client.ai.tests.test_framework.v1.scenarios)['generate-bg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios['generate-bg'].$post(args, options),
  )
}

export async function getAiTestsTestFrameworkV1ScenariosGenerateProgress(
  args: InferRequestType<
    (typeof client.ai.tests.test_framework.v1.scenarios)['generate-progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios['generate-progress'].$get(args, options),
  )
}

export async function postAiTestsTestFrameworkV1ScenariosRunScenarios(
  args: InferRequestType<typeof client.ai.tests.test_framework.v1.scenarios.run_scenarios.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios.run_scenarios.$post(args, options),
  )
}

export async function postAiTestsTestFrameworkV1ScenariosScenarioAgent(
  args: InferRequestType<
    (typeof client.ai.tests.test_framework.v1.scenarios)['scenario-agent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios['scenario-agent'].$post(args, options),
  )
}

export async function getAiTestsTestFrameworkV1ScenariosScenarioAgentProgress(
  args: InferRequestType<
    (typeof client.ai.tests.test_framework.v1.scenarios)['scenario-agent-progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios['scenario-agent-progress'].$get(args, options),
  )
}

export async function getAiTestsTestFrameworkV1ScenariosId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.scenarios)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tests.test_framework.v1.scenarios[':id'].$get(args, options))
}

export async function deleteAiTestsTestFrameworkV1ScenariosId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.scenarios)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios[':id'].$delete(args, options),
  )
}

export async function patchAiTestsTestFrameworkV1ScenariosId(
  args: InferRequestType<(typeof client.ai.tests.test_framework.v1.scenarios)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.tests.test_framework.v1.scenarios[':id'].$patch(args, options),
  )
}

export async function getAiTools(
  args: InferRequestType<typeof client.ai.tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tools.$get(args, options))
}

export async function postAiTools(
  args: InferRequestType<typeof client.ai.tools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tools.$post(args, options))
}

export async function getAiToolsToolId(
  args: InferRequestType<(typeof client.ai.tools)[':tool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tools[':tool_id'].$get(args, options))
}

export async function deleteAiToolsToolId(
  args: InferRequestType<(typeof client.ai.tools)[':tool_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tools[':tool_id'].$delete(args, options))
}

export async function patchAiToolsToolId(
  args: InferRequestType<(typeof client.ai.tools)[':tool_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.tools[':tool_id'].$patch(args, options))
}

export async function postAiTypesafeV1Systemone(
  args: InferRequestType<typeof client.ai.typesafe.v1.systemone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.typesafe.v1.systemone.$post(args, options))
}

export async function getAlphanumericSenderIds(
  args: InferRequestType<typeof client.alphanumeric_sender_ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alphanumeric_sender_ids.$get(args, options))
}

export async function postAlphanumericSenderIds(
  args: InferRequestType<typeof client.alphanumeric_sender_ids.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alphanumeric_sender_ids.$post(args, options))
}

export async function getAlphanumericSenderIdsId(
  args: InferRequestType<(typeof client.alphanumeric_sender_ids)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alphanumeric_sender_ids[':id'].$get(args, options))
}

export async function deleteAlphanumericSenderIdsId(
  args: InferRequestType<(typeof client.alphanumeric_sender_ids)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alphanumeric_sender_ids[':id'].$delete(args, options))
}

export async function getArtifactDownloadsArtifactId(
  args: InferRequestType<(typeof client.artifact_downloads)[':artifactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artifact_downloads[':artifactId'].$get(args, options))
}

export async function getAuditEvents(
  args: InferRequestType<typeof client.audit_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_events.$get(args, options))
}

export async function getAuthenticationProviders(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers.$get(args, options))
}

export async function postAuthenticationProviders(
  args: InferRequestType<typeof client.authentication_providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers.$post(args, options))
}

export async function getAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$get(args, options))
}

export async function deleteAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$delete(args, options))
}

export async function patchAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$patch(args, options))
}

export async function getAvailablePhoneNumberBlocks(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.available_phone_number_blocks.$get(args, options))
}

export async function getAvailablePhoneNumbers(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.available_phone_numbers.$get(args, options))
}

export async function getBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.balance.$get(undefined, options))
}

export async function getBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$get(args, options))
}

export async function postBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$post(args, options))
}

export async function getBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$get(args, options))
}

export async function deleteBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$delete(args, options))
}

export async function patchBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$patch(args, options))
}

export async function postBotChallenge(
  args: InferRequestType<typeof client.bot_challenge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_challenge.$post(args, options))
}

export async function getBotSessions(
  args: InferRequestType<typeof client.bot_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_sessions.$get(args, options))
}

export async function postBotSignup(
  args: InferRequestType<typeof client.bot_signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_signup.$post(args, options))
}

export async function postBotSignupResendMagicLink(
  args: InferRequestType<typeof client.bot_signup.resend_magic_link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bot_signup.resend_magic_link.$post(args, options))
}

export async function getBrowserSessions(
  args: InferRequestType<typeof client.browser_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser_sessions.$get(args, options))
}

export async function postBrowserSessions(
  args: InferRequestType<typeof client.browser_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser_sessions.$post(args, options))
}

export async function getBrowserSessionsId(
  args: InferRequestType<(typeof client.browser_sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser_sessions[':id'].$get(args, options))
}

export async function deleteBrowserSessionsId(
  args: InferRequestType<(typeof client.browser_sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser_sessions[':id'].$delete(args, options))
}

export async function postBrowserSessionsIdActions(
  args: InferRequestType<(typeof client.browser_sessions)[':id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser_sessions[':id'].actions.$post(args, options))
}

export async function getBrowserSessionsIdActionsActionId(
  args: InferRequestType<(typeof client.browser_sessions)[':id']['actions'][':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser_sessions[':id'].actions[':actionId'].$get(args, options),
  )
}

export async function getBrowserSessionsIdArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.browser_sessions)[':id']['artifacts'][':artifactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser_sessions[':id'].artifacts[':artifactId'].$get(args, options),
  )
}

export async function getBulkSimCardActions(
  args: InferRequestType<typeof client.bulk_sim_card_actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_sim_card_actions.$get(args, options))
}

export async function getBulkSimCardActionsId(
  args: InferRequestType<(typeof client.bulk_sim_card_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_sim_card_actions[':id'].$get(args, options))
}

export async function getBundlePricingBillingBundles(
  args: InferRequestType<typeof client.bundle_pricing.billing_bundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_pricing.billing_bundles.$get(args, options))
}

export async function getBundlePricingBillingBundlesBundleId(
  args: InferRequestType<(typeof client.bundle_pricing.billing_bundles)[':bundle_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bundle_pricing.billing_bundles[':bundle_id'].$get(args, options),
  )
}

export async function getBundlePricingUserBundles(
  args: InferRequestType<typeof client.bundle_pricing.user_bundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_pricing.user_bundles.$get(args, options))
}

export async function postBundlePricingUserBundlesBulk(
  args: InferRequestType<typeof client.bundle_pricing.user_bundles.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_pricing.user_bundles.bulk.$post(args, options))
}

export async function getBundlePricingUserBundlesUnused(
  args: InferRequestType<typeof client.bundle_pricing.user_bundles.unused.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundle_pricing.user_bundles.unused.$get(args, options))
}

export async function getBundlePricingUserBundlesUserBundleId(
  args: InferRequestType<(typeof client.bundle_pricing.user_bundles)[':user_bundle_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bundle_pricing.user_bundles[':user_bundle_id'].$get(args, options),
  )
}

export async function deleteBundlePricingUserBundlesUserBundleId(
  args: InferRequestType<(typeof client.bundle_pricing.user_bundles)[':user_bundle_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bundle_pricing.user_bundles[':user_bundle_id'].$delete(args, options),
  )
}

export async function getBundlePricingUserBundlesUserBundleIdResources(
  args: InferRequestType<
    (typeof client.bundle_pricing.user_bundles)[':user_bundle_id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bundle_pricing.user_bundles[':user_bundle_id'].resources.$get(args, options),
  )
}

export async function getCalendarConnections(options?: ClientRequestOptions) {
  return await parseResponse(client.calendar_connections.$get(undefined, options))
}

export async function postCalendarConnections(
  args: InferRequestType<typeof client.calendar_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar_connections.$post(args, options))
}

export async function getCalendarConnectionsId(
  args: InferRequestType<(typeof client.calendar_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar_connections[':id'].$get(args, options))
}

export async function deleteCalendarConnectionsId(
  args: InferRequestType<(typeof client.calendar_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar_connections[':id'].$delete(args, options))
}

export async function patchCalendarConnectionsId(
  args: InferRequestType<(typeof client.calendar_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar_connections[':id'].$patch(args, options))
}

export async function getCalendarConnectionsIdMeetings(
  args: InferRequestType<(typeof client.calendar_connections)[':id']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendar_connections[':id'].meetings.$get(args, options))
}

export async function patchCalendarConnectionsIdMeetingsMeetingId(
  args: InferRequestType<
    (typeof client.calendar_connections)[':id']['meetings'][':meeting_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendar_connections[':id'].meetings[':meeting_id'].$patch(args, options),
  )
}

export async function getCallControlApplications(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications.$get(args, options))
}

export async function postCallControlApplications(
  args: InferRequestType<typeof client.call_control_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications.$post(args, options))
}

export async function getCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$get(args, options))
}

export async function deleteCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$delete(args, options))
}

export async function patchCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$patch(args, options))
}

export async function getCallEvents(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_events.$get(args, options))
}

export async function getCallReasons(
  args: InferRequestType<typeof client.call_reasons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_reasons.$get(args, options))
}

export async function postCallReasonsValidate(
  args: InferRequestType<typeof client.call_reasons.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_reasons.validate.$post(args, options))
}

export async function postCalls(
  args: InferRequestType<typeof client.calls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.$post(args, options))
}

export async function getCallsCallControlId(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].$get(args, options))
}

export async function postCallsCallControlIdActionsAiAssistantAddMessages(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['ai_assistant_add_messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.ai_assistant_add_messages.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsAiAssistantJoin(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['ai_assistant_join']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.ai_assistant_join.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsAiAssistantStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['ai_assistant_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.ai_assistant_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsAiAssistantStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['ai_assistant_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.ai_assistant_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsAnswer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.answer.$post(args, options))
}

export async function postCallsCallControlIdActionsBridge(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.bridge.$post(args, options))
}

export async function putCallsCallControlIdActionsClientStateUpdate(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['client_state_update']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.client_state_update.$put(args, options),
  )
}

export async function postCallsCallControlIdActionsConversationRelayStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['conversation_relay_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.conversation_relay_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsConversationRelayStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['conversation_relay_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.conversation_relay_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsEnqueue(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.enqueue.$post(args, options))
}

export async function postCallsCallControlIdActionsForkStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.fork_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsForkStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.fork_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGather(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['gather']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.gather.$post(args, options))
}

export async function postCallsCallControlIdActionsGatherStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherUsingAi(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_using_ai']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_using_ai.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherUsingAudio(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_using_audio.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherUsingSpeak(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_using_speak.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsHangup(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.hangup.$post(args, options))
}

export async function postCallsCallControlIdActionsLeaveQueue(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.leave_queue.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsPay(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.pay.$post(args, options))
}

export async function postCallsCallControlIdActionsPlaybackStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.playback_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsPlaybackStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.playback_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordPause(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_pause.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordResume(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_resume.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRefer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.refer.$post(args, options))
}

export async function postCallsCallControlIdActionsReject(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.reject.$post(args, options))
}

export async function postCallsCallControlIdActionsSendDtmf(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.send_dtmf.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSendSipInfo(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['send_sip_info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.send_sip_info.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSiprecStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['siprec_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.siprec_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSiprecStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['siprec_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.siprec_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSpeak(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.speak.$post(args, options))
}

export async function postCallsCallControlIdActionsStreamingStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['streaming_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.streaming_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsStreamingStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['streaming_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.streaming_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSuppressionStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['suppression_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.suppression_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSuppressionStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['suppression_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.suppression_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSwitchSupervisorRole(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['switch_supervisor_role']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.switch_supervisor_role.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsTranscriptionStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.transcription_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsTranscriptionStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.transcription_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsTransfer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.transfer.$post(args, options))
}

export async function getChannelZones(
  args: InferRequestType<typeof client.channel_zones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_zones.$get(args, options))
}

export async function putChannelZonesChannelZoneId(
  args: InferRequestType<(typeof client.channel_zones)[':channel_zone_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channel_zones[':channel_zone_id'].$put(args, options))
}

export async function getChargesBreakdown(
  args: InferRequestType<typeof client.charges_breakdown.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charges_breakdown.$get(args, options))
}

export async function getChargesSummary(
  args: InferRequestType<typeof client.charges_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charges_summary.$get(args, options))
}

export async function getComments(
  args: InferRequestType<typeof client.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$get(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function getCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$get(args, options))
}

export async function patchCommentsIdRead(
  args: InferRequestType<(typeof client.comments)[':id']['read']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].read.$patch(args, options))
}

export async function getComputeActorsId(
  args: InferRequestType<(typeof client.compute.actors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.actors[':id'].$get(args, options))
}

export async function getComputeFuncs(
  args: InferRequestType<typeof client.compute.funcs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs.$get(args, options))
}

export async function getComputeFuncsIdLogs(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].logs.$get(args, options))
}

export async function getComputeFuncsIdLogsExport(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['logs']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].logs.export.$get(args, options))
}

export async function putComputeFuncsIdLogsExport(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['logs']['export']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].logs.export.$put(args, options))
}

export async function deleteComputeFuncsIdLogsExport(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['logs']['export']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].logs.export.$delete(args, options))
}

export async function getComputeFuncsIdMetricAggregates(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['metric_aggregates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].metric_aggregates.$get(args, options))
}

export async function getComputeFuncsIdRevisions(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].revisions.$get(args, options))
}

export async function getComputeFuncsIdShipInspection(
  args: InferRequestType<(typeof client.compute.funcs)[':id']['ship_inspection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compute.funcs[':id'].ship_inspection.$get(args, options))
}

export async function getConferences(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences.$get(args, options))
}

export async function postConferences(
  args: InferRequestType<typeof client.conferences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences.$post(args, options))
}

export async function getConferencesConferenceIdParticipants(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':conference_id'].participants.$get(args, options))
}

export async function getConferencesId(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].$get(args, options))
}

export async function postConferencesIdActionsEnd(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['end']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.end.$post(args, options))
}

export async function postConferencesIdActionsGatherUsingAudio(
  args: InferRequestType<
    (typeof client.conferences)[':id']['actions']['gather_using_audio']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conferences[':id'].actions.gather_using_audio.$post(args, options),
  )
}

export async function postConferencesIdActionsHold(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.hold.$post(args, options))
}

export async function postConferencesIdActionsJoin(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.join.$post(args, options))
}

export async function postConferencesIdActionsLeave(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.leave.$post(args, options))
}

export async function postConferencesIdActionsMute(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.mute.$post(args, options))
}

export async function postConferencesIdActionsPlay(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.play.$post(args, options))
}

export async function postConferencesIdActionsRecordPause(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_pause.$post(args, options))
}

export async function postConferencesIdActionsRecordResume(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_resume.$post(args, options))
}

export async function postConferencesIdActionsRecordStart(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_start.$post(args, options))
}

export async function postConferencesIdActionsRecordStop(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_stop.$post(args, options))
}

export async function postConferencesIdActionsSendDtmf(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['send_dtmf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.send_dtmf.$post(args, options))
}

export async function postConferencesIdActionsSpeak(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.speak.$post(args, options))
}

export async function postConferencesIdActionsStop(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.stop.$post(args, options))
}

export async function postConferencesIdActionsUnhold(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.unhold.$post(args, options))
}

export async function postConferencesIdActionsUnmute(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.unmute.$post(args, options))
}

export async function postConferencesIdActionsUpdate(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.update.$post(args, options))
}

export async function getConferencesIdParticipantsParticipantId(
  args: InferRequestType<
    (typeof client.conferences)[':id']['participants'][':participant_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conferences[':id'].participants[':participant_id'].$get(args, options),
  )
}

export async function patchConferencesIdParticipantsParticipantId(
  args: InferRequestType<
    (typeof client.conferences)[':id']['participants'][':participant_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conferences[':id'].participants[':participant_id'].$patch(args, options),
  )
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function getConnectionsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.connections.count.$get(undefined, options))
}

export async function getConnectionsConnectionIdActiveCalls(
  args: InferRequestType<(typeof client.connections)[':connection_id']['active_calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].active_calls.$get(args, options))
}

export async function getConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$get(args, options))
}

export async function getCountryCoverage(options?: ClientRequestOptions) {
  return await parseResponse(client.country_coverage.$get(undefined, options))
}

export async function getCountryCoverageCountriesCountryCode(
  args: InferRequestType<(typeof client.country_coverage.countries)[':country_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.country_coverage.countries[':country_code'].$get(args, options))
}

export async function getCredentialConnections(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections.$get(args, options))
}

export async function postCredentialConnections(
  args: InferRequestType<typeof client.credential_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections.$post(args, options))
}

export async function getCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$get(args, options))
}

export async function deleteCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$delete(args, options))
}

export async function patchCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$patch(args, options))
}

export async function postCredentialConnectionsIdActionsCheckRegistrationStatus(
  args: InferRequestType<
    (typeof client.credential_connections)[':id']['actions']['check_registration_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credential_connections[':id'].actions.check_registration_status.$post(args, options),
  )
}

export async function getCustomStorageCredentialsConnectionId(
  args: InferRequestType<(typeof client.custom_storage_credentials)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_storage_credentials[':connection_id'].$get(args, options),
  )
}

export async function putCustomStorageCredentialsConnectionId(
  args: InferRequestType<(typeof client.custom_storage_credentials)[':connection_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_storage_credentials[':connection_id'].$put(args, options),
  )
}

export async function postCustomStorageCredentialsConnectionId(
  args: InferRequestType<(typeof client.custom_storage_credentials)[':connection_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_storage_credentials[':connection_id'].$post(args, options),
  )
}

export async function deleteCustomStorageCredentialsConnectionId(
  args: InferRequestType<(typeof client.custom_storage_credentials)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_storage_credentials[':connection_id'].$delete(args, options),
  )
}

export async function getCustomerServiceRecords(
  args: InferRequestType<typeof client.customer_service_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customer_service_records.$get(args, options))
}

export async function postCustomerServiceRecords(
  args: InferRequestType<typeof client.customer_service_records.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customer_service_records.$post(args, options))
}

export async function postCustomerServiceRecordsPhoneNumberCoverages(
  args: InferRequestType<typeof client.customer_service_records.phone_number_coverages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customer_service_records.phone_number_coverages.$post(args, options),
  )
}

export async function getCustomerServiceRecordsCustomerServiceRecordId(
  args: InferRequestType<
    (typeof client.customer_service_records)[':customer_service_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customer_service_records[':customer_service_record_id'].$get(args, options),
  )
}

export async function getDetailRecords(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detail_records.$get(args, options))
}

export async function getDialMetrics(
  args: InferRequestType<typeof client.dial_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dial_metrics.$get(args, options))
}

export async function getDialogflowConnectionsConnectionId(
  args: InferRequestType<(typeof client.dialogflow_connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dialogflow_connections[':connection_id'].$get(args, options))
}

export async function putDialogflowConnectionsConnectionId(
  args: InferRequestType<(typeof client.dialogflow_connections)[':connection_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dialogflow_connections[':connection_id'].$put(args, options))
}

export async function postDialogflowConnectionsConnectionId(
  args: InferRequestType<(typeof client.dialogflow_connections)[':connection_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dialogflow_connections[':connection_id'].$post(args, options))
}

export async function deleteDialogflowConnectionsConnectionId(
  args: InferRequestType<(typeof client.dialogflow_connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dialogflow_connections[':connection_id'].$delete(args, options))
}

export async function getDir(
  args: InferRequestType<typeof client.dir.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir.$get(args, options))
}

export async function getDirDocumentTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.dir.document_types.$get(undefined, options))
}

export async function getDirDirId(
  args: InferRequestType<(typeof client.dir)[':dir_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].$get(args, options))
}

export async function deleteDirDirId(
  args: InferRequestType<(typeof client.dir)[':dir_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].$delete(args, options))
}

export async function patchDirDirId(
  args: InferRequestType<(typeof client.dir)[':dir_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].$patch(args, options))
}

export async function getDirDirIdBpoAuthorizations(
  args: InferRequestType<(typeof client.dir)[':dir_id']['bpo_authorizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].bpo_authorizations.$get(args, options))
}

export async function postDirDirIdBpoLoa(
  args: InferRequestType<(typeof client.dir)[':dir_id']['bpo_loa']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].bpo_loa.$post(args, options))
}

export async function getDirDirIdComments(
  args: InferRequestType<(typeof client.dir)[':dir_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].comments.$get(args, options))
}

export async function postDirDirIdComments(
  args: InferRequestType<(typeof client.dir)[':dir_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].comments.$post(args, options))
}

export async function getDirDirIdInfringementClaims(
  args: InferRequestType<(typeof client.dir)[':dir_id']['infringement_claims']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].infringement_claims.$get(args, options))
}

export async function putDirDirIdInfringementUpdate(
  args: InferRequestType<(typeof client.dir)[':dir_id']['infringement_update']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].infringement_update.$put(args, options))
}

export async function postDirDirIdLoa(
  args: InferRequestType<(typeof client.dir)[':dir_id']['loa']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].loa.$post(args, options))
}

export async function getDirDirIdPhoneNumberBatches(
  args: InferRequestType<(typeof client.dir)[':dir_id']['phone_number_batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].phone_number_batches.$get(args, options))
}

export async function getDirDirIdPhoneNumberBatchesBatchId(
  args: InferRequestType<
    (typeof client.dir)[':dir_id']['phone_number_batches'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dir[':dir_id'].phone_number_batches[':batch_id'].$get(args, options),
  )
}

export async function getDirDirIdPhoneNumbers(
  args: InferRequestType<(typeof client.dir)[':dir_id']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].phone_numbers.$get(args, options))
}

export async function postDirDirIdPhoneNumbers(
  args: InferRequestType<(typeof client.dir)[':dir_id']['phone_numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].phone_numbers.$post(args, options))
}

export async function deleteDirDirIdPhoneNumbers(
  args: InferRequestType<(typeof client.dir)[':dir_id']['phone_numbers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].phone_numbers.$delete(args, options))
}

export async function getDirDirIdReferences(
  args: InferRequestType<(typeof client.dir)[':dir_id']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].references.$get(args, options))
}

export async function postDirDirIdReferences(
  args: InferRequestType<(typeof client.dir)[':dir_id']['references']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].references.$post(args, options))
}

export async function patchDirDirIdReferencesRefTypeSlot(
  args: InferRequestType<
    (typeof client.dir)[':dir_id']['references'][':ref_type'][':slot']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dir[':dir_id'].references[':ref_type'][':slot'].$patch(args, options),
  )
}

export async function postDirDirIdSubmit(
  args: InferRequestType<(typeof client.dir)[':dir_id']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].submit.$post(args, options))
}

export async function getDirDirIdVerifyEmail(
  args: InferRequestType<(typeof client.dir)[':dir_id']['verify_email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].verify_email.$get(args, options))
}

export async function postDirDirIdVerifyEmail(
  args: InferRequestType<(typeof client.dir)[':dir_id']['verify_email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].verify_email.$post(args, options))
}

export async function postDirDirIdVerifyEmailConfirm(
  args: InferRequestType<(typeof client.dir)[':dir_id']['verify_email']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dir[':dir_id'].verify_email.confirm.$post(args, options))
}

export async function getDocumentLinks(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_links.$get(args, options))
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$post(args, options))
}

export async function getDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$get(args, options))
}

export async function deleteDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$delete(args, options))
}

export async function patchDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$patch(args, options))
}

export async function getDocumentsIdDownload(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].download.$get(args, options))
}

export async function getDocumentsIdDownloadLink(
  args: InferRequestType<(typeof client.documents)[':id']['download_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].download_link.$get(args, options))
}

export async function getDynamicEmergencyAddresses(
  args: InferRequestType<typeof client.dynamic_emergency_addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_addresses.$get(args, options))
}

export async function postDynamicEmergencyAddresses(
  args: InferRequestType<typeof client.dynamic_emergency_addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_addresses.$post(args, options))
}

export async function getDynamicEmergencyAddressesId(
  args: InferRequestType<(typeof client.dynamic_emergency_addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_addresses[':id'].$get(args, options))
}

export async function deleteDynamicEmergencyAddressesId(
  args: InferRequestType<(typeof client.dynamic_emergency_addresses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_addresses[':id'].$delete(args, options))
}

export async function getDynamicEmergencyEndpoints(
  args: InferRequestType<typeof client.dynamic_emergency_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_endpoints.$get(args, options))
}

export async function postDynamicEmergencyEndpoints(
  args: InferRequestType<typeof client.dynamic_emergency_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_endpoints.$post(args, options))
}

export async function getDynamicEmergencyEndpointsId(
  args: InferRequestType<(typeof client.dynamic_emergency_endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_endpoints[':id'].$get(args, options))
}

export async function deleteDynamicEmergencyEndpointsId(
  args: InferRequestType<(typeof client.dynamic_emergency_endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_emergency_endpoints[':id'].$delete(args, options))
}

export async function getEmailDedicatedIps(
  args: InferRequestType<typeof client.email.dedicated_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.dedicated_ips.$get(args, options))
}

export async function postEmailDedicatedIps(
  args: InferRequestType<typeof client.email.dedicated_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.dedicated_ips.$post(args, options))
}

export async function getEmailDedicatedIpsId(
  args: InferRequestType<(typeof client.email.dedicated_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.dedicated_ips[':id'].$get(args, options))
}

export async function deleteEmailDedicatedIpsId(
  args: InferRequestType<(typeof client.email.dedicated_ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.dedicated_ips[':id'].$delete(args, options))
}

export async function patchEmailDedicatedIpsId(
  args: InferRequestType<(typeof client.email.dedicated_ips)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.dedicated_ips[':id'].$patch(args, options))
}

export async function postEmailDedicatedIpsIdActionsCompleteWarmup(
  args: InferRequestType<
    (typeof client.email.dedicated_ips)[':id']['actions']['complete_warmup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email.dedicated_ips[':id'].actions.complete_warmup.$post(args, options),
  )
}

export async function postEmailDedicatedIpsIdActionsPauseWarmup(
  args: InferRequestType<
    (typeof client.email.dedicated_ips)[':id']['actions']['pause_warmup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email.dedicated_ips[':id'].actions.pause_warmup.$post(args, options),
  )
}

export async function postEmailDedicatedIpsIdActionsResumeWarmup(
  args: InferRequestType<
    (typeof client.email.dedicated_ips)[':id']['actions']['resume_warmup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email.dedicated_ips[':id'].actions.resume_warmup.$post(args, options),
  )
}

export async function postEmailDedicatedIpsIdActionsStartWarmup(
  args: InferRequestType<
    (typeof client.email.dedicated_ips)[':id']['actions']['start_warmup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email.dedicated_ips[':id'].actions.start_warmup.$post(args, options),
  )
}

export async function getEmailIpPools(options?: ClientRequestOptions) {
  return await parseResponse(client.email.ip_pools.$get(undefined, options))
}

export async function postEmailIpPools(
  args: InferRequestType<typeof client.email.ip_pools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools.$post(args, options))
}

export async function getEmailIpPoolsId(
  args: InferRequestType<(typeof client.email.ip_pools)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools[':id'].$get(args, options))
}

export async function deleteEmailIpPoolsId(
  args: InferRequestType<(typeof client.email.ip_pools)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools[':id'].$delete(args, options))
}

export async function patchEmailIpPoolsId(
  args: InferRequestType<(typeof client.email.ip_pools)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools[':id'].$patch(args, options))
}

export async function postEmailIpPoolsIdIps(
  args: InferRequestType<(typeof client.email.ip_pools)[':id']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools[':id'].ips.$post(args, options))
}

export async function deleteEmailIpPoolsIdIpsIpId(
  args: InferRequestType<(typeof client.email.ip_pools)[':id']['ips'][':ip_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.ip_pools[':id'].ips[':ip_id'].$delete(args, options))
}

export async function getEmailBlocks(
  args: InferRequestType<typeof client.email_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks.$get(args, options))
}

export async function postEmailBlocks(
  args: InferRequestType<typeof client.email_blocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks.$post(args, options))
}

export async function getEmailBlocksExport(
  args: InferRequestType<typeof client.email_blocks.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks.export.$get(args, options))
}

export async function postEmailBlocksImport(
  args: InferRequestType<typeof client.email_blocks.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks.import.$post(args, options))
}

export async function getEmailBlocksImportId(
  args: InferRequestType<(typeof client.email_blocks.import)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks.import[':id'].$get(args, options))
}

export async function getEmailBlocksId(
  args: InferRequestType<(typeof client.email_blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks[':id'].$get(args, options))
}

export async function deleteEmailBlocksId(
  args: InferRequestType<(typeof client.email_blocks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks[':id'].$delete(args, options))
}

export async function getEmailBlocksIdEvents(
  args: InferRequestType<(typeof client.email_blocks)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_blocks[':id'].events.$get(args, options))
}

export async function getEmailDomains(
  args: InferRequestType<typeof client.email_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains.$get(args, options))
}

export async function postEmailDomains(
  args: InferRequestType<typeof client.email_domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains.$post(args, options))
}

export async function getEmailDomainsDomainIdDnsRecords(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['dns_records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].dns_records.$get(args, options))
}

export async function postEmailDomainsDomainIdRotateDkim(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['rotate_dkim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].rotate_dkim.$post(args, options))
}

export async function postEmailDomainsDomainIdVerify(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].verify.$post(args, options))
}

export async function getEmailDomainsDomainIdWebhooks(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].webhooks.$get(args, options))
}

export async function postEmailDomainsDomainIdWebhooks(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].webhooks.$post(args, options))
}

export async function getEmailDomainsDomainIdWebhooksId(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['webhooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':domain_id'].webhooks[':id'].$get(args, options))
}

export async function deleteEmailDomainsDomainIdWebhooksId(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['webhooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_domains[':domain_id'].webhooks[':id'].$delete(args, options),
  )
}

export async function patchEmailDomainsDomainIdWebhooksId(
  args: InferRequestType<(typeof client.email_domains)[':domain_id']['webhooks'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_domains[':domain_id'].webhooks[':id'].$patch(args, options),
  )
}

export async function getEmailDomainsId(
  args: InferRequestType<(typeof client.email_domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':id'].$get(args, options))
}

export async function deleteEmailDomainsId(
  args: InferRequestType<(typeof client.email_domains)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':id'].$delete(args, options))
}

export async function patchEmailDomainsId(
  args: InferRequestType<(typeof client.email_domains)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':id'].$patch(args, options))
}

export async function getEmailDomainsIdHealth(
  args: InferRequestType<(typeof client.email_domains)[':id']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_domains[':id'].health.$get(args, options))
}

export async function getEmailEvents(
  args: InferRequestType<typeof client.email_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_events.$get(args, options))
}

export async function getEmailEventsStats(
  args: InferRequestType<typeof client.email_events.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_events.stats.$get(args, options))
}

export async function getEmailInboxes(
  args: InferRequestType<typeof client.email_inboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes.$get(args, options))
}

export async function postEmailInboxes(
  args: InferRequestType<typeof client.email_inboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes.$post(args, options))
}

export async function getEmailInboxesId(
  args: InferRequestType<(typeof client.email_inboxes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':id'].$get(args, options))
}

export async function deleteEmailInboxesId(
  args: InferRequestType<(typeof client.email_inboxes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':id'].$delete(args, options))
}

export async function getEmailInboxesInboxIdDrafts(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].drafts.$get(args, options))
}

export async function postEmailInboxesInboxIdDrafts(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].drafts.$post(args, options))
}

export async function getEmailInboxesInboxIdDraftsDraftId(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].drafts[':draft_id'].$get(args, options),
  )
}

export async function putEmailInboxesInboxIdDraftsDraftId(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['drafts'][':draft_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].drafts[':draft_id'].$put(args, options),
  )
}

export async function deleteEmailInboxesInboxIdDraftsDraftId(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].drafts[':draft_id'].$delete(args, options),
  )
}

export async function patchEmailInboxesInboxIdDraftsDraftId(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].drafts[':draft_id'].$patch(args, options),
  )
}

export async function postEmailInboxesInboxIdDraftsDraftIdSend(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].drafts[':draft_id'].send.$post(args, options),
  )
}

export async function getEmailInboxesInboxIdFilters(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].filters.$get(args, options))
}

export async function putEmailInboxesInboxIdFilters(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['filters']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].filters.$put(args, options))
}

export async function postEmailInboxesInboxIdFilters(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].filters.$post(args, options))
}

export async function deleteEmailInboxesInboxIdFilters(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['filters']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].filters.$delete(args, options))
}

export async function getEmailInboxesInboxIdMessages(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].messages.$get(args, options))
}

export async function patchEmailInboxesInboxIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].$patch(args, options),
  )
}

export async function postEmailInboxesInboxIdMessagesMessageIdActionsForward(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['actions']['forward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].actions.forward.$post(args, options),
  )
}

export async function postEmailInboxesInboxIdMessagesMessageIdActionsReply(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['actions']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].actions.reply.$post(args, options),
  )
}

export async function postEmailInboxesInboxIdMessagesMessageIdActionsReplyAll(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['actions']['reply_all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].actions.reply_all.$post(
      args,
      options,
    ),
  )
}

export async function postEmailInboxesInboxIdMessagesMessageIdDrafts(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['drafts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].drafts.$post(args, options),
  )
}

export async function postEmailInboxesInboxIdMessagesMessageIdLabels(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].labels.$post(args, options),
  )
}

export async function deleteEmailInboxesInboxIdMessagesMessageIdLabels(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['messages'][':message_id']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].messages[':message_id'].labels.$delete(args, options),
  )
}

export async function getEmailInboxesInboxIdThreads(
  args: InferRequestType<(typeof client.email_inboxes)[':inbox_id']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_inboxes[':inbox_id'].threads.$get(args, options))
}

export async function getEmailInboxesInboxIdThreadsThreadId(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['threads'][':thread_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].threads[':thread_id'].$get(args, options),
  )
}

export async function postEmailInboxesInboxIdThreadsThreadIdLabels(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].threads[':thread_id'].labels.$post(args, options),
  )
}

export async function deleteEmailInboxesInboxIdThreadsThreadIdLabels(
  args: InferRequestType<
    (typeof client.email_inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_inboxes[':inbox_id'].threads[':thread_id'].labels.$delete(args, options),
  )
}

export async function getEmailMessages(
  args: InferRequestType<typeof client.email_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages.$get(args, options))
}

export async function postEmailMessages(
  args: InferRequestType<typeof client.email_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages.$post(args, options))
}

export async function deleteEmailMessages(
  args: InferRequestType<typeof client.email_messages.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages.$delete(args, options))
}

export async function postEmailMessagesBatch(
  args: InferRequestType<typeof client.email_messages.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages.batch.$post(args, options))
}

export async function getEmailMessagesEmailIdEvents(
  args: InferRequestType<(typeof client.email_messages)[':email_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':email_id'].events.$get(args, options))
}

export async function getEmailMessagesEmailIdRecipients(
  args: InferRequestType<(typeof client.email_messages)[':email_id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':email_id'].recipients.$get(args, options))
}

export async function getEmailMessagesEmailIdRecipientsRecipientId(
  args: InferRequestType<
    (typeof client.email_messages)[':email_id']['recipients'][':recipient_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_messages[':email_id'].recipients[':recipient_id'].$get(args, options),
  )
}

export async function deleteEmailMessagesEmailIdSchedule(
  args: InferRequestType<(typeof client.email_messages)[':email_id']['schedule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':email_id'].schedule.$delete(args, options))
}

export async function patchEmailMessagesEmailIdSchedule(
  args: InferRequestType<(typeof client.email_messages)[':email_id']['schedule']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':email_id'].schedule.$patch(args, options))
}

export async function getEmailMessagesId(
  args: InferRequestType<(typeof client.email_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':id'].$get(args, options))
}

export async function deleteEmailMessagesId(
  args: InferRequestType<(typeof client.email_messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_messages[':id'].$delete(args, options))
}

export async function getEmailTemplates(
  args: InferRequestType<typeof client.email_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates.$get(args, options))
}

export async function postEmailTemplates(
  args: InferRequestType<typeof client.email_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates.$post(args, options))
}

export async function getEmailTemplatesId(
  args: InferRequestType<(typeof client.email_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates[':id'].$get(args, options))
}

export async function putEmailTemplatesId(
  args: InferRequestType<(typeof client.email_templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates[':id'].$put(args, options))
}

export async function deleteEmailTemplatesId(
  args: InferRequestType<(typeof client.email_templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates[':id'].$delete(args, options))
}

export async function patchEmailTemplatesId(
  args: InferRequestType<(typeof client.email_templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates[':id'].$patch(args, options))
}

export async function postEmailTemplatesIdRender(
  args: InferRequestType<(typeof client.email_templates)[':id']['render']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_templates[':id'].render.$post(args, options))
}

export async function getEmailThreads(
  args: InferRequestType<typeof client.email_threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_threads.$get(args, options))
}

export async function getEmailThreadsThreadId(
  args: InferRequestType<(typeof client.email_threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_threads[':thread_id'].$get(args, options))
}

export async function getEmailUnsubscribeGroups(
  args: InferRequestType<typeof client.email_unsubscribe_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_unsubscribe_groups.$get(args, options))
}

export async function postEmailUnsubscribeGroups(
  args: InferRequestType<typeof client.email_unsubscribe_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_unsubscribe_groups.$post(args, options))
}

export async function getEmailUnsubscribeGroupsId(
  args: InferRequestType<(typeof client.email_unsubscribe_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_unsubscribe_groups[':id'].$get(args, options))
}

export async function deleteEmailUnsubscribeGroupsId(
  args: InferRequestType<(typeof client.email_unsubscribe_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_unsubscribe_groups[':id'].$delete(args, options))
}

export async function patchEmailUnsubscribeGroupsId(
  args: InferRequestType<(typeof client.email_unsubscribe_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_unsubscribe_groups[':id'].$patch(args, options))
}

export async function getEmailUnsubscribeGroupsIdSuppressions(
  args: InferRequestType<(typeof client.email_unsubscribe_groups)[':id']['suppressions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_unsubscribe_groups[':id'].suppressions.$get(args, options),
  )
}

export async function postEmailUnsubscribeGroupsIdSuppressions(
  args: InferRequestType<(typeof client.email_unsubscribe_groups)[':id']['suppressions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_unsubscribe_groups[':id'].suppressions.$post(args, options),
  )
}

export async function deleteEmailUnsubscribeGroupsIdSuppressionsEmail(
  args: InferRequestType<
    (typeof client.email_unsubscribe_groups)[':id']['suppressions'][':email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email_unsubscribe_groups[':id'].suppressions[':email'].$delete(args, options),
  )
}

export async function postEmailValidations(
  args: InferRequestType<typeof client.email_validations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_validations.$post(args, options))
}

export async function postEmailValidationsBatch(
  args: InferRequestType<typeof client.email_validations.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_validations.batch.$post(args, options))
}

export async function getEmailValidationsBatchId(
  args: InferRequestType<(typeof client.email_validations.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_validations.batch[':id'].$get(args, options))
}

export async function getEnterprises(
  args: InferRequestType<typeof client.enterprises.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises.$get(args, options))
}

export async function postEnterprises(
  args: InferRequestType<typeof client.enterprises.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises.$post(args, options))
}

export async function getEnterprisesEnterpriseId(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].$get(args, options))
}

export async function putEnterprisesEnterpriseId(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].$put(args, options))
}

export async function deleteEnterprisesEnterpriseId(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].$delete(args, options))
}

export async function postEnterprisesEnterpriseIdBrandedCalling(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['branded_calling']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].branded_calling.$post(args, options),
  )
}

export async function getEnterprisesEnterpriseIdDir(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].dir.$get(args, options))
}

export async function postEnterprisesEnterpriseIdDir(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['dir']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].dir.$post(args, options))
}

export async function getEnterprisesEnterpriseIdReputation(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['reputation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].reputation.$get(args, options))
}

export async function postEnterprisesEnterpriseIdReputation(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['reputation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].reputation.$post(args, options))
}

export async function deleteEnterprisesEnterpriseIdReputation(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['reputation']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].reputation.$delete(args, options))
}

export async function getEnterprisesEnterpriseIdReputationExternalVerification(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['external_verification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.external_verification.$get(args, options),
  )
}

export async function postEnterprisesEnterpriseIdReputationExternalVerification(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['external_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.external_verification.$post(args, options),
  )
}

export async function patchEnterprisesEnterpriseIdReputationFrequency(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['frequency']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.frequency.$patch(args, options),
  )
}

export async function postEnterprisesEnterpriseIdReputationLoa(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['loa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.loa.$post(args, options),
  )
}

export async function patchEnterprisesEnterpriseIdReputationLoa(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['loa']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.loa.$patch(args, options),
  )
}

export async function getEnterprisesEnterpriseIdReputationNumbers(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers.$get(args, options),
  )
}

export async function postEnterprisesEnterpriseIdReputationNumbers(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers.$post(args, options),
  )
}

export async function postEnterprisesEnterpriseIdReputationNumbersRefresh(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers.refresh.$post(args, options),
  )
}

export async function getEnterprisesEnterpriseIdReputationNumbersPhoneNumber(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers'][':phone_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers[':phone_number'].$get(args, options),
  )
}

export async function deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumber(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers'][':phone_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers[':phone_number'].$delete(args, options),
  )
}

export async function getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnership(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers'][':phone_number']['ownership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers[':phone_number'].ownership.$get(
      args,
      options,
    ),
  )
}

export async function postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirm(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['numbers'][':phone_number']['ownership_confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.numbers[
      ':phone_number'
    ].ownership_confirm.$post(args, options),
  )
}

export async function getEnterprisesEnterpriseIdReputationRemediation(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['remediation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.remediation.$get(args, options),
  )
}

export async function postEnterprisesEnterpriseIdReputationRemediation(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['remediation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.remediation.$post(args, options),
  )
}

export async function getEnterprisesEnterpriseIdReputationRemediationRemediationId(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['remediation'][':remediation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.remediation[':remediation_id'].$get(
      args,
      options,
    ),
  )
}

export async function patchEnterprisesEnterpriseIdReputationWebhook(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['reputation']['webhook']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].reputation.webhook.$patch(args, options),
  )
}

export async function postEnterprisesEnterpriseIdVerifyEmail(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['verify_email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':enterprise_id'].verify_email.$post(args, options))
}

export async function postEnterprisesEnterpriseIdVerifyEmailConfirm(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise_id']['verify_email']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].verify_email.confirm.$post(args, options),
  )
}

export async function getExternalConnections(
  args: InferRequestType<typeof client.external_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections.$get(args, options))
}

export async function postExternalConnections(
  args: InferRequestType<typeof client.external_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections.$post(args, options))
}

export async function getExternalConnectionsLogMessages(
  args: InferRequestType<typeof client.external_connections.log_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections.log_messages.$get(args, options))
}

export async function getExternalConnectionsLogMessagesId(
  args: InferRequestType<(typeof client.external_connections.log_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections.log_messages[':id'].$get(args, options))
}

export async function deleteExternalConnectionsLogMessagesId(
  args: InferRequestType<(typeof client.external_connections.log_messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections.log_messages[':id'].$delete(args, options))
}

export async function getExternalConnectionsId(
  args: InferRequestType<(typeof client.external_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].$get(args, options))
}

export async function deleteExternalConnectionsId(
  args: InferRequestType<(typeof client.external_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].$delete(args, options))
}

export async function patchExternalConnectionsId(
  args: InferRequestType<(typeof client.external_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].$patch(args, options))
}

export async function getExternalConnectionsIdCivicAddresses(
  args: InferRequestType<(typeof client.external_connections)[':id']['civic_addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].civic_addresses.$get(args, options))
}

export async function getExternalConnectionsIdCivicAddressesAddressId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['civic_addresses'][':address_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].civic_addresses[':address_id'].$get(args, options),
  )
}

export async function patchExternalConnectionsIdLocationsLocationId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['locations'][':location_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].locations[':location_id'].$patch(args, options),
  )
}

export async function getExternalConnectionsIdPhoneNumbers(
  args: InferRequestType<(typeof client.external_connections)[':id']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].phone_numbers.$get(args, options))
}

export async function getExternalConnectionsIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['phone_numbers'][':phone_number_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].phone_numbers[':phone_number_id'].$get(args, options),
  )
}

export async function patchExternalConnectionsIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['phone_numbers'][':phone_number_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].phone_numbers[':phone_number_id'].$patch(args, options),
  )
}

export async function getExternalConnectionsIdReleases(
  args: InferRequestType<(typeof client.external_connections)[':id']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].releases.$get(args, options))
}

export async function getExternalConnectionsIdReleasesReleaseId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['releases'][':release_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].releases[':release_id'].$get(args, options),
  )
}

export async function getExternalConnectionsIdUploads(
  args: InferRequestType<(typeof client.external_connections)[':id']['uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].uploads.$get(args, options))
}

export async function postExternalConnectionsIdUploads(
  args: InferRequestType<(typeof client.external_connections)[':id']['uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].uploads.$post(args, options))
}

export async function postExternalConnectionsIdUploadsRefresh(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['uploads']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].uploads.refresh.$post(args, options),
  )
}

export async function getExternalConnectionsIdUploadsStatus(
  args: InferRequestType<(typeof client.external_connections)[':id']['uploads']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_connections[':id'].uploads.status.$get(args, options))
}

export async function getExternalConnectionsIdUploadsTicketId(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['uploads'][':ticket_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].uploads[':ticket_id'].$get(args, options),
  )
}

export async function postExternalConnectionsIdUploadsTicketIdRetry(
  args: InferRequestType<
    (typeof client.external_connections)[':id']['uploads'][':ticket_id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_connections[':id'].uploads[':ticket_id'].retry.$post(args, options),
  )
}

export async function getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<
    (typeof client.external_requirements)[':regulatory_requirement_id']['sub_number_orders'][':sub_number_order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_requirements[':regulatory_requirement_id'].sub_number_orders[
      ':sub_number_order_id'
    ].$get(args, options),
  )
}

export async function postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<
    (typeof client.external_requirements)[':regulatory_requirement_id']['sub_number_orders'][':sub_number_order_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.external_requirements[':regulatory_requirement_id'].sub_number_orders[
      ':sub_number_order_id'
    ].$post(args, options),
  )
}

export async function getFaxApplications(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications.$get(args, options))
}

export async function postFaxApplications(
  args: InferRequestType<typeof client.fax_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications.$post(args, options))
}

export async function getFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$get(args, options))
}

export async function deleteFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$delete(args, options))
}

export async function patchFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$patch(args, options))
}

export async function getFaxes(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes.$get(args, options))
}

export async function postFaxes(
  args: InferRequestType<typeof client.faxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes.$post(args, options))
}

export async function getFaxesId(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].$get(args, options))
}

export async function deleteFaxesId(
  args: InferRequestType<(typeof client.faxes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].$delete(args, options))
}

export async function postFaxesIdActionsCancel(
  args: InferRequestType<(typeof client.faxes)[':id']['actions']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].actions.cancel.$post(args, options))
}

export async function postFaxesIdActionsRefresh(
  args: InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].actions.refresh.$post(args, options))
}

export async function getFqdnConnections(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections.$get(args, options))
}

export async function postFqdnConnections(
  args: InferRequestType<typeof client.fqdn_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections.$post(args, options))
}

export async function getFqdnConnectionsFqdnConnectionIdFqdnAuthentication(
  args: InferRequestType<
    (typeof client.fqdn_connections)[':fqdn_connection_id']['fqdn_authentication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fqdn_connections[':fqdn_connection_id'].fqdn_authentication.$get(args, options),
  )
}

export async function patchFqdnConnectionsFqdnConnectionIdFqdnAuthentication(
  args: InferRequestType<
    (typeof client.fqdn_connections)[':fqdn_connection_id']['fqdn_authentication']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fqdn_connections[':fqdn_connection_id'].fqdn_authentication.$patch(args, options),
  )
}

export async function getFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$get(args, options))
}

export async function deleteFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$delete(args, options))
}

export async function patchFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$patch(args, options))
}

export async function getFqdns(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns.$get(args, options))
}

export async function postFqdns(
  args: InferRequestType<typeof client.fqdns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns.$post(args, options))
}

export async function getFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$get(args, options))
}

export async function deleteFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$delete(args, options))
}

export async function patchFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$patch(args, options))
}

export async function getGlobalIpAllowedPorts(options?: ClientRequestOptions) {
  return await parseResponse(client.global_ip_allowed_ports.$get(undefined, options))
}

export async function getGlobalIpAssignmentHealth(
  args: InferRequestType<typeof client.global_ip_assignment_health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignment_health.$get(args, options))
}

export async function getGlobalIpAssignments(
  args: InferRequestType<typeof client.global_ip_assignments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments.$get(args, options))
}

export async function postGlobalIpAssignments(
  args: InferRequestType<typeof client.global_ip_assignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments.$post(args, options))
}

export async function getGlobalIpAssignmentsUsage(
  args: InferRequestType<typeof client.global_ip_assignments.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments.usage.$get(args, options))
}

export async function getGlobalIpAssignmentsId(
  args: InferRequestType<(typeof client.global_ip_assignments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments[':id'].$get(args, options))
}

export async function deleteGlobalIpAssignmentsId(
  args: InferRequestType<(typeof client.global_ip_assignments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments[':id'].$delete(args, options))
}

export async function patchGlobalIpAssignmentsId(
  args: InferRequestType<(typeof client.global_ip_assignments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments[':id'].$patch(args, options))
}

export async function getGlobalIpAssignmentsUsage2(
  args: InferRequestType<typeof client.global_ip_assignments_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_assignments_usage.$get(args, options))
}

export async function getGlobalIpHealthCheckTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.global_ip_health_check_types.$get(undefined, options))
}

export async function getGlobalIpHealthChecks(
  args: InferRequestType<typeof client.global_ip_health_checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_health_checks.$get(args, options))
}

export async function postGlobalIpHealthChecks(
  args: InferRequestType<typeof client.global_ip_health_checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_health_checks.$post(args, options))
}

export async function getGlobalIpHealthChecksId(
  args: InferRequestType<(typeof client.global_ip_health_checks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_health_checks[':id'].$get(args, options))
}

export async function deleteGlobalIpHealthChecksId(
  args: InferRequestType<(typeof client.global_ip_health_checks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_health_checks[':id'].$delete(args, options))
}

export async function getGlobalIpLatency(
  args: InferRequestType<typeof client.global_ip_latency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_latency.$get(args, options))
}

export async function getGlobalIpProtocols(options?: ClientRequestOptions) {
  return await parseResponse(client.global_ip_protocols.$get(undefined, options))
}

export async function getGlobalIpUsage(
  args: InferRequestType<typeof client.global_ip_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ip_usage.$get(args, options))
}

export async function getGlobalIps(
  args: InferRequestType<typeof client.global_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ips.$get(args, options))
}

export async function postGlobalIps(
  args: InferRequestType<typeof client.global_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ips.$post(args, options))
}

export async function getGlobalIpsId(
  args: InferRequestType<(typeof client.global_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ips[':id'].$get(args, options))
}

export async function deleteGlobalIpsId(
  args: InferRequestType<(typeof client.global_ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.global_ips[':id'].$delete(args, options))
}

export async function getInboundChannels(options?: ClientRequestOptions) {
  return await parseResponse(client.inbound_channels.$get(undefined, options))
}

export async function patchInboundChannels(
  args: InferRequestType<typeof client.inbound_channels.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound_channels.$patch(args, options))
}

export async function getInexplicitNumberOrders(
  args: InferRequestType<typeof client.inexplicit_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inexplicit_number_orders.$get(args, options))
}

export async function postInexplicitNumberOrders(
  args: InferRequestType<typeof client.inexplicit_number_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inexplicit_number_orders.$post(args, options))
}

export async function getInexplicitNumberOrdersId(
  args: InferRequestType<(typeof client.inexplicit_number_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inexplicit_number_orders[':id'].$get(args, options))
}

export async function getInfringementClaimsClaimId(
  args: InferRequestType<(typeof client.infringement_claims)[':claim_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.infringement_claims[':claim_id'].$get(args, options))
}

export async function postInfringementClaimsClaimIdContest(
  args: InferRequestType<(typeof client.infringement_claims)[':claim_id']['contest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.infringement_claims[':claim_id'].contest.$post(args, options))
}

export async function getIntegrationSecrets(
  args: InferRequestType<typeof client.integration_secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integration_secrets.$get(args, options))
}

export async function postIntegrationSecrets(
  args: InferRequestType<typeof client.integration_secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integration_secrets.$post(args, options))
}

export async function deleteIntegrationSecretsId(
  args: InferRequestType<(typeof client.integration_secrets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integration_secrets[':id'].$delete(args, options))
}

export async function getInventoryCoverage(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory_coverage.$get(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function getInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$get(args, options))
}

export async function getIpConnections(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections.$get(args, options))
}

export async function postIpConnections(
  args: InferRequestType<typeof client.ip_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections.$post(args, options))
}

export async function getIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$get(args, options))
}

export async function deleteIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$delete(args, options))
}

export async function patchIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$patch(args, options))
}

export async function getIps(
  args: InferRequestType<typeof client.ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$get(args, options))
}

export async function postIps(
  args: InferRequestType<typeof client.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$post(args, options))
}

export async function getIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$get(args, options))
}

export async function deleteIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$delete(args, options))
}

export async function patchIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$patch(args, options))
}

export async function postLedgerBillingGroupReports(
  args: InferRequestType<typeof client.ledger_billing_group_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_billing_group_reports.$post(args, options))
}

export async function getLedgerBillingGroupReportsId(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_billing_group_reports[':id'].$get(args, options))
}

export async function getLegacyReportingBatchDetailRecordsSpeechToText(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch.detail.records.speech.to.text.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsSpeechToText(
  args: InferRequestType<typeof client.legacy.reporting.batch.detail.records.speech.to.text.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch.detail.records.speech.to.text.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsSpeechToTextId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch.detail.records.speech.to.text)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch.detail.records.speech.to.text[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsSpeechToTextId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch.detail.records.speech.to.text)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch.detail.records.speech.to.text[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsMessaging(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.messaging.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsMessaging(
  args: InferRequestType<typeof client.legacy.reporting.batch_detail_records.messaging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.messaging.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsMessagingId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.messaging)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.messaging[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsMessagingId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.messaging)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.messaging[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsSpeechToText2(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.speech_to_text.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsSpeechToText2(
  args: InferRequestType<typeof client.legacy.reporting.batch_detail_records.speech_to_text.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.speech_to_text.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsSpeechToTextId2(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.speech_to_text)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.speech_to_text[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsSpeechToTextId2(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.speech_to_text)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.speech_to_text[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoice(options?: ClientRequestOptions) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.voice.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsVoice(
  args: InferRequestType<typeof client.legacy.reporting.batch_detail_records.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.voice.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoiceFields(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.voice.fields.$get(undefined, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoiceId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.voice)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.voice[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsVoiceId(
  args: InferRequestType<
    (typeof client.legacy.reporting.batch_detail_records.voice)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.batch_detail_records.voice[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsMessaging(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy.reporting.usage_reports.messaging.$get(args, options))
}

export async function postLegacyReportingUsageReportsMessaging(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.messaging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy.reporting.usage_reports.messaging.$post(args, options))
}

export async function getLegacyReportingUsageReportsMessagingId(
  args: InferRequestType<(typeof client.legacy.reporting.usage_reports.messaging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.messaging[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingUsageReportsMessagingId(
  args: InferRequestType<
    (typeof client.legacy.reporting.usage_reports.messaging)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.messaging[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsNumberLookup(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.number_lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.number_lookup.$get(args, options),
  )
}

export async function postLegacyReportingUsageReportsNumberLookup(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.number_lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.number_lookup.$post(args, options),
  )
}

export async function getLegacyReportingUsageReportsNumberLookupId(
  args: InferRequestType<
    (typeof client.legacy.reporting.usage_reports.number_lookup)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.number_lookup[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingUsageReportsNumberLookupId(
  args: InferRequestType<
    (typeof client.legacy.reporting.usage_reports.number_lookup)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.number_lookup[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsSpeechToText(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.speech_to_text.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.speech_to_text.$get(args, options),
  )
}

export async function getLegacyReportingUsageReportsVoice(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.voice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy.reporting.usage_reports.voice.$get(args, options))
}

export async function postLegacyReportingUsageReportsVoice(
  args: InferRequestType<typeof client.legacy.reporting.usage_reports.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy.reporting.usage_reports.voice.$post(args, options))
}

export async function getLegacyReportingUsageReportsVoiceId(
  args: InferRequestType<(typeof client.legacy.reporting.usage_reports.voice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy.reporting.usage_reports.voice[':id'].$get(args, options))
}

export async function deleteLegacyReportingUsageReportsVoiceId(
  args: InferRequestType<(typeof client.legacy.reporting.usage_reports.voice)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy.reporting.usage_reports.voice[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsMessaging2(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.messaging.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsMessaging2(
  args: InferRequestType<typeof client.legacy_reporting.batch_detail_records.messaging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.messaging.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsMessagingId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.batch_detail_records.messaging)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.messaging[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsMessagingId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.batch_detail_records.messaging)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.messaging[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoice2(options?: ClientRequestOptions) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.voice.$get(undefined, options),
  )
}

export async function postLegacyReportingBatchDetailRecordsVoice2(
  args: InferRequestType<typeof client.legacy_reporting.batch_detail_records.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.voice.$post(args, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoiceFields2(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.voice.fields.$get(undefined, options),
  )
}

export async function getLegacyReportingBatchDetailRecordsVoiceId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.batch_detail_records.voice)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.voice[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingBatchDetailRecordsVoiceId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.batch_detail_records.voice)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.batch_detail_records.voice[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsMessaging2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy_reporting.usage_reports.messaging.$get(args, options))
}

export async function postLegacyReportingUsageReportsMessaging2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.messaging.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy_reporting.usage_reports.messaging.$post(args, options))
}

export async function getLegacyReportingUsageReportsMessagingId2(
  args: InferRequestType<(typeof client.legacy_reporting.usage_reports.messaging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.messaging[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingUsageReportsMessagingId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.usage_reports.messaging)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.messaging[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsNumberLookup2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.number_lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.number_lookup.$get(args, options),
  )
}

export async function postLegacyReportingUsageReportsNumberLookup2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.number_lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.number_lookup.$post(args, options),
  )
}

export async function getLegacyReportingUsageReportsNumberLookupId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.usage_reports.number_lookup)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.number_lookup[':id'].$get(args, options),
  )
}

export async function deleteLegacyReportingUsageReportsNumberLookupId2(
  args: InferRequestType<
    (typeof client.legacy_reporting.usage_reports.number_lookup)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.number_lookup[':id'].$delete(args, options),
  )
}

export async function getLegacyReportingUsageReportsSpeechToText2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.speech_to_text.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.speech_to_text.$get(args, options),
  )
}

export async function getLegacyReportingUsageReportsVoice2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.voice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy_reporting.usage_reports.voice.$get(args, options))
}

export async function postLegacyReportingUsageReportsVoice2(
  args: InferRequestType<typeof client.legacy_reporting.usage_reports.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy_reporting.usage_reports.voice.$post(args, options))
}

export async function getLegacyReportingUsageReportsVoiceId2(
  args: InferRequestType<(typeof client.legacy_reporting.usage_reports.voice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legacy_reporting.usage_reports.voice[':id'].$get(args, options))
}

export async function deleteLegacyReportingUsageReportsVoiceId2(
  args: InferRequestType<(typeof client.legacy_reporting.usage_reports.voice)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legacy_reporting.usage_reports.voice[':id'].$delete(args, options),
  )
}

export async function getList(options?: ClientRequestOptions) {
  return await parseResponse(client.list.$get(undefined, options))
}

export async function getListChannelZoneId(
  args: InferRequestType<(typeof client.list)[':channel_zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.list[':channel_zone_id'].$get(args, options))
}

export async function getLlmTokenGatewaySpendEvents(
  args: InferRequestType<typeof client.llm_token_gateway.spend.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.spend.events.$get(args, options))
}

export async function getLlmTokenGatewaySpendSummary(
  args: InferRequestType<typeof client.llm_token_gateway.spend.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.spend.summary.$get(args, options))
}

export async function getLlmTokenGatewayTokenGroups(
  args: InferRequestType<typeof client.llm_token_gateway.token_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_groups.$get(args, options))
}

export async function postLlmTokenGatewayTokenGroups(
  args: InferRequestType<typeof client.llm_token_gateway.token_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_groups.$post(args, options))
}

export async function getLlmTokenGatewayTokenGroupsId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_groups[':id'].$get(args, options))
}

export async function deleteLlmTokenGatewayTokenGroupsId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_groups[':id'].$delete(args, options))
}

export async function patchLlmTokenGatewayTokenGroupsId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_groups[':id'].$patch(args, options))
}

export async function getLlmTokenGatewayTokenKeys(
  args: InferRequestType<typeof client.llm_token_gateway.token_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_keys.$get(args, options))
}

export async function postLlmTokenGatewayTokenKeys(
  args: InferRequestType<typeof client.llm_token_gateway.token_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_keys.$post(args, options))
}

export async function getLlmTokenGatewayTokenKeysId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_keys[':id'].$get(args, options))
}

export async function deleteLlmTokenGatewayTokenKeysId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_keys[':id'].$delete(args, options))
}

export async function patchLlmTokenGatewayTokenKeysId(
  args: InferRequestType<(typeof client.llm_token_gateway.token_keys)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.token_keys[':id'].$patch(args, options))
}

export async function getLlmTokenGatewayUsageExport(
  args: InferRequestType<typeof client.llm_token_gateway.usage.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.usage.export.$get(args, options))
}

export async function getLlmTokenGatewayUsageSummary(
  args: InferRequestType<typeof client.llm_token_gateway.usage.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llm_token_gateway.usage.summary.$get(args, options))
}

export async function postMachinePaymentsAccountCredit(
  args: InferRequestType<(typeof client)['machine-payments']['account-credit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['machine-payments']['account-credit'].$post(args, options))
}

export async function getManagedAccounts(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts.$get(args, options))
}

export async function postManagedAccounts(
  args: InferRequestType<typeof client.managed_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts.$post(args, options))
}

export async function getManagedAccountsAllocatableGlobalOutboundChannels(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed_accounts.allocatable_global_outbound_channels.$get(undefined, options),
  )
}

export async function getManagedAccountsId(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].$get(args, options))
}

export async function patchManagedAccountsId(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].$patch(args, options))
}

export async function postManagedAccountsIdActionsDisable(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].actions.disable.$post(args, options))
}

export async function postManagedAccountsIdActionsEnable(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].actions.enable.$post(args, options))
}

export async function patchManagedAccountsIdUpdateGlobalChannelLimit(
  args: InferRequestType<
    (typeof client.managed_accounts)[':id']['update_global_channel_limit']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed_accounts[':id'].update_global_channel_limit.$patch(args, options),
  )
}

export async function getMedia(
  args: InferRequestType<typeof client.media.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$get(args, options))
}

export async function postMedia(
  args: InferRequestType<typeof client.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$post(args, options))
}

export async function getMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$get(args, options))
}

export async function putMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$put(args, options))
}

export async function deleteMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$delete(args, options))
}

export async function getMediaMediaNameDownload(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].download.$get(args, options))
}

export async function getMeetingBotCalendarOauthCallback(
  args: InferRequestType<typeof client.meeting_bot.calendar.oauth_callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_bot.calendar.oauth_callback.$get(args, options))
}

export async function getMeetingSessions(
  args: InferRequestType<typeof client.meeting_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions.$get(args, options))
}

export async function postMeetingSessions(
  args: InferRequestType<typeof client.meeting_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions.$post(args, options))
}

export async function getMeetingSessionsId(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].$get(args, options))
}

export async function deleteMeetingSessionsId(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].$delete(args, options))
}

export async function patchMeetingSessionsId(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].$patch(args, options))
}

export async function postMeetingSessionsIdActionsSendChat(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['actions']['send_chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].actions.send_chat.$post(args, options))
}

export async function postMeetingSessionsIdActionsSpeak(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['actions']['speak']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].actions.speak.$post(args, options))
}

export async function postMeetingSessionsIdActionsStopSpeaking(
  args: InferRequestType<
    (typeof client.meeting_sessions)[':id']['actions']['stop_speaking']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meeting_sessions[':id'].actions.stop_speaking.$post(args, options),
  )
}

export async function getMeetingSessionsIdArtifacts(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].artifacts.$get(args, options))
}

export async function postMeetingSessionsIdArtifacts(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['artifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].artifacts.$post(args, options))
}

export async function getMeetingSessionsIdArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.meeting_sessions)[':id']['artifacts'][':artifact_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meeting_sessions[':id'].artifacts[':artifact_id'].$get(args, options),
  )
}

export async function getMeetingSessionsIdEvents(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].events.$get(args, options))
}

export async function deleteMeetingSessionsIdRecordingMedia(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['recording_media']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].recording_media.$delete(args, options))
}

export async function getMeetingSessionsIdRecordings(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].recordings.$get(args, options))
}

export async function getMeetingSessionsIdTranscript(
  args: InferRequestType<(typeof client.meeting_sessions)[':id']['transcript']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meeting_sessions[':id'].transcript.$get(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function postMessagesAlphanumericSenderId(
  args: InferRequestType<typeof client.messages.alphanumeric.sender.id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.alphanumeric.sender.id.$post(args, options))
}

export async function postMessagesAlphanumericSenderId2(
  args: InferRequestType<typeof client.messages.alphanumeric_sender_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.alphanumeric_sender_id.$post(args, options))
}

export async function getMessagesGroupMessageId(
  args: InferRequestType<(typeof client.messages.group)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.group[':message_id'].$get(args, options))
}

export async function postMessagesGroupMms(
  args: InferRequestType<typeof client.messages.group_mms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.group_mms.$post(args, options))
}

export async function postMessagesLongCode(
  args: InferRequestType<typeof client.messages.long_code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.long_code.$post(args, options))
}

export async function postMessagesNumberPool(
  args: InferRequestType<typeof client.messages.number_pool.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.number_pool.$post(args, options))
}

export async function postMessagesRcs(
  args: InferRequestType<typeof client.messages.rcs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.rcs.$post(args, options))
}

export async function getMessagesRcsDeeplinksAgentId(
  args: InferRequestType<(typeof client.messages.rcs.deeplinks)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.rcs.deeplinks[':agent_id'].$get(args, options))
}

export async function getMessagesRcsDeeplinksAgentId2(
  args: InferRequestType<(typeof client.messages.rcs_deeplinks)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.rcs_deeplinks[':agent_id'].$get(args, options))
}

export async function postMessagesSchedule(
  args: InferRequestType<typeof client.messages.schedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.schedule.$post(args, options))
}

export async function postMessagesShortCode(
  args: InferRequestType<typeof client.messages.short_code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.short_code.$post(args, options))
}

export async function postMessagesWhatsapp(
  args: InferRequestType<typeof client.messages.whatsapp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.whatsapp.$post(args, options))
}

export async function getMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$get(args, options))
}

export async function deleteMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$delete(args, options))
}

export async function getMessagingHostedNumbers(
  args: InferRequestType<typeof client.messaging.hosted.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.hosted.numbers.$get(args, options))
}

export async function postMessagingProfilesIdActionsRegenerateSecret(
  args: InferRequestType<
    (typeof client.messaging.profiles)[':id']['actions']['regenerate']['secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.profiles[':id'].actions.regenerate.secret.$post(args, options),
  )
}

export async function getMessagingProfilesIdAlphanumericSenderIds(
  args: InferRequestType<
    (typeof client.messaging.profiles)[':id']['alphanumeric']['sender']['ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.profiles[':id'].alphanumeric.sender.ids.$get(args, options),
  )
}

export async function getMessagingProfilesIdMetrics(
  args: InferRequestType<(typeof client.messaging.profiles)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.profiles[':id'].metrics.$get(args, options))
}

export async function getMessagingRcsAgents(
  args: InferRequestType<typeof client.messaging.rcs.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.rcs.agents.$get(args, options))
}

export async function getMessagingRcsAgentsId(
  args: InferRequestType<(typeof client.messaging.rcs.agents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.rcs.agents[':id'].$get(args, options))
}

export async function patchMessagingRcsAgentsId(
  args: InferRequestType<(typeof client.messaging.rcs.agents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.rcs.agents[':id'].$patch(args, options))
}

export async function postMessagingRcsBulkCapabilities(
  args: InferRequestType<typeof client.messaging.rcs.bulk_capabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.rcs.bulk_capabilities.$post(args, options))
}

export async function getMessagingRcsCapabilitiesAgentIdPhoneNumber(
  args: InferRequestType<
    (typeof client.messaging.rcs.capabilities)[':agent_id'][':phone_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.rcs.capabilities[':agent_id'][':phone_number'].$get(args, options),
  )
}

export async function putMessagingRcsTestNumberInviteIdPhoneNumber(
  args: InferRequestType<
    (typeof client.messaging.rcs.test_number_invite)[':id'][':phone_number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.rcs.test_number_invite[':id'][':phone_number'].$put(args, options),
  )
}

export async function getMessagingTollfreeVerificationRequestsIdStatusHistory(
  args: InferRequestType<
    (typeof client.messaging.tollfree.verification.requests)[':id']['status']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.tollfree.verification.requests[':id'].status.history.$get(args, options),
  )
}

export async function getMessagingHostedNumberOrders(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders.$get(args, options))
}

export async function postMessagingHostedNumberOrders(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders.$post(args, options))
}

export async function postMessagingHostedNumberOrdersEligibilityNumbersCheck(
  args: InferRequestType<
    typeof client.messaging_hosted_number_orders.eligibility_numbers_check.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_hosted_number_orders.eligibility_numbers_check.$post(args, options),
  )
}

export async function getMessagingHostedNumberOrdersId(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders[':id'].$get(args, options))
}

export async function deleteMessagingHostedNumberOrdersId(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders[':id'].$delete(args, options))
}

export async function postMessagingHostedNumberOrdersIdActionsFileUpload(
  args: InferRequestType<
    (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_hosted_number_orders[':id'].actions.file_upload.$post(args, options),
  )
}

export async function postMessagingHostedNumberOrdersIdValidationCodes(
  args: InferRequestType<
    (typeof client.messaging_hosted_number_orders)[':id']['validation_codes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_hosted_number_orders[':id'].validation_codes.$post(args, options),
  )
}

export async function postMessagingHostedNumberOrdersIdVerificationCodes(
  args: InferRequestType<
    (typeof client.messaging_hosted_number_orders)[':id']['verification_codes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_hosted_number_orders[':id'].verification_codes.$post(args, options),
  )
}

export async function getMessagingHostedNumbers2(
  args: InferRequestType<typeof client.messaging_hosted_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_numbers.$get(args, options))
}

export async function getMessagingHostedNumbersId(
  args: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_numbers[':id'].$get(args, options))
}

export async function deleteMessagingHostedNumbersId(
  args: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_numbers[':id'].$delete(args, options))
}

export async function patchMessagingHostedNumbersId(
  args: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_numbers[':id'].$patch(args, options))
}

export async function postMessagingNumbersBulkUpdates(
  args: InferRequestType<typeof client.messaging_numbers.bulk_updates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_numbers.bulk_updates.$post(args, options))
}

export async function getMessagingNumbersBulkUpdatesOrderId(
  args: InferRequestType<(typeof client.messaging_numbers.bulk_updates)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_numbers.bulk_updates[':order_id'].$get(args, options))
}

export async function postMessagingNumbersBulkUpdates2(
  args: InferRequestType<typeof client.messaging_numbers_bulk_updates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_numbers_bulk_updates.$post(args, options))
}

export async function getMessagingNumbersBulkUpdatesOrderId2(
  args: InferRequestType<(typeof client.messaging_numbers_bulk_updates)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_numbers_bulk_updates[':order_id'].$get(args, options))
}

export async function getMessagingOptouts(
  args: InferRequestType<typeof client.messaging_optouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_optouts.$get(args, options))
}

export async function getMessagingProfileMetrics(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profile_metrics.$get(args, options))
}

export async function getMessagingProfiles(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles.$get(args, options))
}

export async function postMessagingProfiles(
  args: InferRequestType<typeof client.messaging_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles.$post(args, options))
}

export async function getMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$get(args, options))
}

export async function deleteMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$delete(args, options))
}

export async function patchMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$patch(args, options))
}

export async function postMessagingProfilesIdActionsRegenerateSecret2(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':id']['actions']['regenerate_secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':id'].actions.regenerate_secret.$post(args, options),
  )
}

export async function getMessagingProfilesIdAlphanumericSenderIds2(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':id']['alphanumeric_sender_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':id'].alphanumeric_sender_ids.$get(args, options),
  )
}

export async function getMessagingProfilesIdMetrics2(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].metrics.$get(args, options))
}

export async function getMessagingProfilesIdPhoneNumbers(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].phone_numbers.$get(args, options))
}

export async function getMessagingProfilesIdShortCodes(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].short_codes.$get(args, options))
}

export async function getMessagingProfilesProfileIdAutorespConfigs(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':profile_id']['autoresp_configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':profile_id'].autoresp_configs.$get(args, options),
  )
}

export async function postMessagingProfilesProfileIdAutorespConfigs(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':profile_id']['autoresp_configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':profile_id'].autoresp_configs.$post(args, options),
  )
}

export async function getMessagingProfilesProfileIdAutorespConfigsAutorespCfgId(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':profile_id']['autoresp_configs'][':autoresp_cfg_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':profile_id'].autoresp_configs[':autoresp_cfg_id'].$get(
      args,
      options,
    ),
  )
}

export async function putMessagingProfilesProfileIdAutorespConfigsAutorespCfgId(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':profile_id']['autoresp_configs'][':autoresp_cfg_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':profile_id'].autoresp_configs[':autoresp_cfg_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgId(
  args: InferRequestType<
    (typeof client.messaging_profiles)[':profile_id']['autoresp_configs'][':autoresp_cfg_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_profiles[':profile_id'].autoresp_configs[':autoresp_cfg_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getMessagingTollfreeVerificationRequests(
  args: InferRequestType<typeof client.messaging_tollfree.verification.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_tollfree.verification.requests.$get(args, options))
}

export async function postMessagingTollfreeVerificationRequests(
  args: InferRequestType<typeof client.messaging_tollfree.verification.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_tollfree.verification.requests.$post(args, options))
}

export async function getMessagingTollfreeVerificationRequestsId(
  args: InferRequestType<(typeof client.messaging_tollfree.verification.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_tollfree.verification.requests[':id'].$get(args, options),
  )
}

export async function deleteMessagingTollfreeVerificationRequestsId(
  args: InferRequestType<
    (typeof client.messaging_tollfree.verification.requests)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_tollfree.verification.requests[':id'].$delete(args, options),
  )
}

export async function patchMessagingTollfreeVerificationRequestsId(
  args: InferRequestType<(typeof client.messaging_tollfree.verification.requests)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_tollfree.verification.requests[':id'].$patch(args, options),
  )
}

export async function getMessagingTollfreeVerificationRequestsIdStatusHistory2(
  args: InferRequestType<
    (typeof client.messaging_tollfree.verification.requests)[':id']['status_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_tollfree.verification.requests[':id'].status_history.$get(args, options),
  )
}

export async function getMessagingUrlDomains(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_url_domains.$get(args, options))
}

export async function getMobileNetworkOperators(
  args: InferRequestType<typeof client.mobile_network_operators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_network_operators.$get(args, options))
}

export async function getMobilePhoneNumbers(
  args: InferRequestType<typeof client.mobile_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_phone_numbers.$get(args, options))
}

export async function getMobilePhoneNumbersMessaging(
  args: InferRequestType<typeof client.mobile_phone_numbers.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_phone_numbers.messaging.$get(args, options))
}

export async function getMobilePhoneNumbersId(
  args: InferRequestType<(typeof client.mobile_phone_numbers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_phone_numbers[':id'].$get(args, options))
}

export async function patchMobilePhoneNumbersId(
  args: InferRequestType<(typeof client.mobile_phone_numbers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_phone_numbers[':id'].$patch(args, options))
}

export async function getMobilePhoneNumbersIdMessaging(
  args: InferRequestType<(typeof client.mobile_phone_numbers)[':id']['messaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_phone_numbers[':id'].messaging.$get(args, options))
}

export async function getMobilePushCredentials(
  args: InferRequestType<typeof client.mobile_push_credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_push_credentials.$get(args, options))
}

export async function postMobilePushCredentials(
  args: InferRequestType<typeof client.mobile_push_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_push_credentials.$post(args, options))
}

export async function getMobilePushCredentialsPushCredentialId(
  args: InferRequestType<(typeof client.mobile_push_credentials)[':push_credential_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mobile_push_credentials[':push_credential_id'].$get(args, options),
  )
}

export async function deleteMobilePushCredentialsPushCredentialId(
  args: InferRequestType<(typeof client.mobile_push_credentials)[':push_credential_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mobile_push_credentials[':push_credential_id'].$delete(args, options),
  )
}

export async function getMobileVoiceConnections(
  args: InferRequestType<typeof client.mobile_voice_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_voice_connections.$get(args, options))
}

export async function postMobileVoiceConnections(
  args: InferRequestType<typeof client.mobile_voice_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_voice_connections.$post(args, options))
}

export async function getMobileVoiceConnectionsId(
  args: InferRequestType<(typeof client.mobile_voice_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_voice_connections[':id'].$get(args, options))
}

export async function deleteMobileVoiceConnectionsId(
  args: InferRequestType<(typeof client.mobile_voice_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_voice_connections[':id'].$delete(args, options))
}

export async function patchMobileVoiceConnectionsId(
  args: InferRequestType<(typeof client.mobile_voice_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_voice_connections[':id'].$patch(args, options))
}

export async function getNetworkCoverage(
  args: InferRequestType<typeof client.network_coverage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network_coverage.$get(args, options))
}

export async function getNetworkRoutes(
  args: InferRequestType<typeof client.network_routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network_routes.$get(args, options))
}

export async function postNetworkRoutes(
  args: InferRequestType<typeof client.network_routes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network_routes.$post(args, options))
}

export async function getNetworkRoutesId(
  args: InferRequestType<(typeof client.network_routes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network_routes[':id'].$get(args, options))
}

export async function deleteNetworkRoutesId(
  args: InferRequestType<(typeof client.network_routes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network_routes[':id'].$delete(args, options))
}

export async function getNetworks(
  args: InferRequestType<typeof client.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$get(args, options))
}

export async function postNetworks(
  args: InferRequestType<typeof client.networks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$post(args, options))
}

export async function getNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$get(args, options))
}

export async function deleteNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$delete(args, options))
}

export async function patchNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$patch(args, options))
}

export async function getNetworksIdDefaultGateway(
  args: InferRequestType<(typeof client.networks)[':id']['default_gateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].default_gateway.$get(args, options))
}

export async function postNetworksIdDefaultGateway(
  args: InferRequestType<(typeof client.networks)[':id']['default_gateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].default_gateway.$post(args, options))
}

export async function deleteNetworksIdDefaultGateway(
  args: InferRequestType<(typeof client.networks)[':id']['default_gateway']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].default_gateway.$delete(args, options))
}

export async function getNetworksIdNetworkInterfaces(
  args: InferRequestType<(typeof client.networks)[':id']['network_interfaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].network_interfaces.$get(args, options))
}

export async function getNoiseSuppressionEngines(options?: ClientRequestOptions) {
  return await parseResponse(client.noise_suppression_engines.$get(undefined, options))
}

export async function getNotificationChannels(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels.$get(args, options))
}

export async function postNotificationChannels(
  args: InferRequestType<typeof client.notification_channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels.$post(args, options))
}

export async function getNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$get(args, options))
}

export async function deleteNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$delete(args, options))
}

export async function patchNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$patch(args, options))
}

export async function getNotificationEventConditions(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_event_conditions.$get(args, options))
}

export async function getNotificationEvents(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_events.$get(args, options))
}

export async function getNotificationProfiles(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles.$get(args, options))
}

export async function postNotificationProfiles(
  args: InferRequestType<typeof client.notification_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles.$post(args, options))
}

export async function getNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$get(args, options))
}

export async function deleteNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$delete(args, options))
}

export async function patchNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$patch(args, options))
}

export async function getNotificationSettings(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings.$get(args, options))
}

export async function postNotificationSettings(
  args: InferRequestType<typeof client.notification_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings.$post(args, options))
}

export async function getNotificationSettingsId(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings[':id'].$get(args, options))
}

export async function deleteNotificationSettingsId(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings[':id'].$delete(args, options))
}

export async function getNumberBlockOrders(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_block_orders.$get(args, options))
}

export async function postNumberBlockOrders(
  args: InferRequestType<typeof client.number_block_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_block_orders.$post(args, options))
}

export async function getNumberBlockOrdersNumberBlockOrderId(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_block_orders[':number_block_order_id'].$get(args, options),
  )
}

export async function getNumberLookupPhoneNumber(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_lookup[':phone_number'].$get(args, options))
}

export async function getNumberOrderPhoneNumbers(
  args: InferRequestType<typeof client.number_order_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_order_phone_numbers.$get(args, options))
}

export async function postNumberOrderPhoneNumbersIdRequirementGroup(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':id']['requirement_group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_phone_numbers[':id'].requirement_group.$post(args, options),
  )
}

export async function getNumberOrderPhoneNumbersNumberOrderPhoneNumberId(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_phone_numbers[':number_order_phone_number_id'].$get(args, options),
  )
}

export async function patchNumberOrderPhoneNumbersNumberOrderPhoneNumberId(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_phone_numbers[':number_order_phone_number_id'].$patch(args, options),
  )
}

export async function getNumberOrders(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders.$get(args, options))
}

export async function postNumberOrders(
  args: InferRequestType<typeof client.number_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders.$post(args, options))
}

export async function getNumberOrdersNumberOrderId(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders[':number_order_id'].$get(args, options))
}

export async function patchNumberOrdersNumberOrderId(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders[':number_order_id'].$patch(args, options))
}

export async function getNumberReservations(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_reservations.$get(args, options))
}

export async function postNumberReservations(
  args: InferRequestType<typeof client.number_reservations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_reservations.$post(args, options))
}

export async function getNumberReservationsNumberReservationId(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_reservations[':number_reservation_id'].$get(args, options),
  )
}

export async function postNumberReservationsNumberReservationIdActionsExtend(
  args: InferRequestType<
    (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_reservations[':number_reservation_id'].actions.extend.$post(args, options),
  )
}

export async function postNumbersFeatures(
  args: InferRequestType<typeof client.numbers_features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers_features.$post(args, options))
}

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function getOauthClients(
  args: InferRequestType<typeof client.oauth.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients.$get(args, options))
}

export async function postOauthClients(
  args: InferRequestType<typeof client.oauth.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients.$post(args, options))
}

export async function getOauthClientsId(
  args: InferRequestType<(typeof client.oauth.clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients[':id'].$get(args, options))
}

export async function putOauthClientsId(
  args: InferRequestType<(typeof client.oauth.clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients[':id'].$put(args, options))
}

export async function deleteOauthClientsId(
  args: InferRequestType<(typeof client.oauth.clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.clients[':id'].$delete(args, options))
}

export async function getOauthConsentConsentToken(
  args: InferRequestType<(typeof client.oauth.consent)[':consent_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.consent[':consent_token'].$get(args, options))
}

export async function getOauthGrants(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants.$get(args, options))
}

export async function postOauthGrants(
  args: InferRequestType<typeof client.oauth.grants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants.$post(args, options))
}

export async function getOauthGrantsId(
  args: InferRequestType<(typeof client.oauth.grants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants[':id'].$get(args, options))
}

export async function deleteOauthGrantsId(
  args: InferRequestType<(typeof client.oauth.grants)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants[':id'].$delete(args, options))
}

export async function postOauthIntrospect(
  args: InferRequestType<typeof client.oauth.introspect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.introspect.$post(args, options))
}

export async function getOauthJwks(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.jwks.$get(undefined, options))
}

export async function postOauthRegister(
  args: InferRequestType<typeof client.oauth.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.register.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function getOauthClients2(
  args: InferRequestType<typeof client.oauth_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_clients.$get(args, options))
}

export async function postOauthClients2(
  args: InferRequestType<typeof client.oauth_clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_clients.$post(args, options))
}

export async function getOauthClientsId2(
  args: InferRequestType<(typeof client.oauth_clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_clients[':id'].$get(args, options))
}

export async function putOauthClientsId2(
  args: InferRequestType<(typeof client.oauth_clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_clients[':id'].$put(args, options))
}

export async function deleteOauthClientsId2(
  args: InferRequestType<(typeof client.oauth_clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_clients[':id'].$delete(args, options))
}

export async function getOauthGrants2(
  args: InferRequestType<typeof client.oauth_grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_grants.$get(args, options))
}

export async function getOauthGrantsId2(
  args: InferRequestType<(typeof client.oauth_grants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_grants[':id'].$get(args, options))
}

export async function deleteOauthGrantsId2(
  args: InferRequestType<(typeof client.oauth_grants)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_grants[':id'].$delete(args, options))
}

export async function postOperatorConnectActionsRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.operator_connect.actions.refresh.$post(undefined, options))
}

export async function getOrganizationsUsers(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users.$get(args, options))
}

export async function getOrganizationsUsersUsersGroupsReport(
  args: InferRequestType<typeof client.organizations.users.users_groups_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users.users_groups_report.$get(args, options))
}

export async function getOrganizationsUsersId(
  args: InferRequestType<(typeof client.organizations.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users[':id'].$get(args, options))
}

export async function postOrganizationsUsersIdActionsRemove(
  args: InferRequestType<(typeof client.organizations.users)[':id']['actions']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users[':id'].actions.remove.$post(args, options))
}

export async function getOtaUpdates(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ota_updates.$get(args, options))
}

export async function getOtaUpdatesId(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ota_updates[':id'].$get(args, options))
}

export async function getOutboundVoiceProfiles(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles.$get(args, options))
}

export async function postOutboundVoiceProfiles(
  args: InferRequestType<typeof client.outbound_voice_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles.$post(args, options))
}

export async function getOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$get(args, options))
}

export async function deleteOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$delete(args, options))
}

export async function patchOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$patch(args, options))
}

export async function getPayConnectors(
  args: InferRequestType<typeof client.pay_connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay_connectors.$get(args, options))
}

export async function postPayConnectors(
  args: InferRequestType<typeof client.pay_connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay_connectors.$post(args, options))
}

export async function getPayConnectorsName(
  args: InferRequestType<(typeof client.pay_connectors)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay_connectors[':name'].$get(args, options))
}

export async function deletePayConnectorsName(
  args: InferRequestType<(typeof client.pay_connectors)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay_connectors[':name'].$delete(args, options))
}

export async function patchPayConnectorsName(
  args: InferRequestType<(typeof client.pay_connectors)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay_connectors[':name'].$patch(args, options))
}

export async function getPaymentAutoRechargePrefs(options?: ClientRequestOptions) {
  return await parseResponse(client.payment.auto_recharge_prefs.$get(undefined, options))
}

export async function patchPaymentAutoRechargePrefs(
  args: InferRequestType<typeof client.payment.auto_recharge_prefs.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.auto_recharge_prefs.$patch(args, options))
}

export async function postPaymentStoredPaymentTransactions(
  args: InferRequestType<typeof client.payment.stored_payment_transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.stored_payment_transactions.$post(args, options))
}

export async function getPhoneNumberBlocksJobs(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_number_blocks.jobs.$get(args, options))
}

export async function postPhoneNumberBlocksJobsDeletePhoneNumberBlock(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_number_blocks.jobs.delete_phone_number_block.$post(args, options),
  )
}

export async function getPhoneNumberBlocksJobsId(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_number_blocks.jobs[':id'].$get(args, options))
}

export async function getPhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.$get(args, options))
}

export async function postPhoneNumbersActionsVerifyOwnership(
  args: InferRequestType<typeof client.phone_numbers.actions.verify_ownership.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.actions.verify_ownership.$post(args, options))
}

export async function getPhoneNumbersCsvDownloads(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.csv_downloads.$get(args, options))
}

export async function postPhoneNumbersCsvDownloads(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.csv_downloads.$post(args, options))
}

export async function getPhoneNumbersCsvDownloadsId(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.csv_downloads[':id'].$get(args, options))
}

export async function getPhoneNumbersJobs(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.$get(args, options))
}

export async function postPhoneNumbersJobsDeletePhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.delete_phone_numbers.$post(args, options))
}

export async function postPhoneNumbersJobsUpdateEmergencySettings(
  args: InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers.jobs.update_emergency_settings.$post(args, options),
  )
}

export async function postPhoneNumbersJobsUpdatePhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.update_phone_numbers.$post(args, options))
}

export async function getPhoneNumbersJobsId(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs[':id'].$get(args, options))
}

export async function getPhoneNumbersMessaging(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.messaging.$get(args, options))
}

export async function getPhoneNumbersRegulatoryRequirements(
  args: InferRequestType<typeof client.phone_numbers.regulatory_requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.regulatory_requirements.$get(args, options))
}

export async function getPhoneNumbersSlim(
  args: InferRequestType<typeof client.phone_numbers.slim.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.slim.$get(args, options))
}

export async function getPhoneNumbersVoice(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.voice.$get(args, options))
}

export async function getPhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$get(args, options))
}

export async function deletePhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$delete(args, options))
}

export async function patchPhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$patch(args, options))
}

export async function patchPhoneNumbersIdActionsBundleStatusChange(
  args: InferRequestType<
    (typeof client.phone_numbers)[':id']['actions']['bundle_status_change']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':id'].actions.bundle_status_change.$patch(args, options),
  )
}

export async function postPhoneNumbersIdActionsEnableEmergency(
  args: InferRequestType<
    (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':id'].actions.enable_emergency.$post(args, options),
  )
}

export async function getPhoneNumbersIdMessaging(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].messaging.$get(args, options))
}

export async function patchPhoneNumbersIdMessaging(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].messaging.$patch(args, options))
}

export async function getPhoneNumbersIdVoice(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].voice.$get(args, options))
}

export async function patchPhoneNumbersIdVoice(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].voice.$patch(args, options))
}

export async function getPhoneNumbersPhoneNumberIdVoicemail(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['voicemail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':phone_number_id'].voicemail.$get(args, options))
}

export async function postPhoneNumbersPhoneNumberIdVoicemail(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['voicemail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':phone_number_id'].voicemail.$post(args, options),
  )
}

export async function patchPhoneNumbersPhoneNumberIdVoicemail(
  args: InferRequestType<(typeof client.phone_numbers)[':phone_number_id']['voicemail']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':phone_number_id'].voicemail.$patch(args, options),
  )
}

export async function getPhoneNumbersRegulatoryRequirements2(
  args: InferRequestType<typeof client.phone_numbers_regulatory_requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers_regulatory_requirements.$get(args, options))
}

export async function postPortabilityChecks(
  args: InferRequestType<typeof client.portability_checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portability_checks.$post(args, options))
}

export async function getPortingEvents(
  args: InferRequestType<typeof client.porting.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.events.$get(args, options))
}

export async function getPortingEventsId(
  args: InferRequestType<(typeof client.porting.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.events[':id'].$get(args, options))
}

export async function postPortingEventsIdRepublish(
  args: InferRequestType<(typeof client.porting.events)[':id']['republish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.events[':id'].republish.$post(args, options))
}

export async function getPortingLoaConfigurations(
  args: InferRequestType<typeof client.porting.loa_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations.$get(args, options))
}

export async function postPortingLoaConfigurations(
  args: InferRequestType<typeof client.porting.loa_configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations.$post(args, options))
}

export async function postPortingLoaConfigurationsPreview(
  args: InferRequestType<typeof client.porting.loa_configurations.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations.preview.$post(args, options))
}

export async function getPortingLoaConfigurationsId(
  args: InferRequestType<(typeof client.porting.loa_configurations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations[':id'].$get(args, options))
}

export async function deletePortingLoaConfigurationsId(
  args: InferRequestType<(typeof client.porting.loa_configurations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations[':id'].$delete(args, options))
}

export async function patchPortingLoaConfigurationsId(
  args: InferRequestType<(typeof client.porting.loa_configurations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations[':id'].$patch(args, options))
}

export async function getPortingLoaConfigurationsIdPreview(
  args: InferRequestType<(typeof client.porting.loa_configurations)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.loa_configurations[':id'].preview.$get(args, options))
}

export async function getPortingReports(
  args: InferRequestType<typeof client.porting.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.reports.$get(args, options))
}

export async function postPortingReports(
  args: InferRequestType<typeof client.porting.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.reports.$post(args, options))
}

export async function getPortingReportsId(
  args: InferRequestType<(typeof client.porting.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting.reports[':id'].$get(args, options))
}

export async function getPortingUkCarriers(options?: ClientRequestOptions) {
  return await parseResponse(client.porting.uk_carriers.$get(undefined, options))
}

export async function getPortingOrders(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.$get(args, options))
}

export async function postPortingOrders(
  args: InferRequestType<typeof client.porting_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.$post(args, options))
}

export async function getPortingOrdersExceptionTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.porting_orders.exception_types.$get(undefined, options))
}

export async function getPortingOrdersPhoneNumberConfigurations(
  args: InferRequestType<typeof client.porting_orders.phone_number_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.phone_number_configurations.$get(args, options))
}

export async function postPortingOrdersPhoneNumberConfigurations(
  args: InferRequestType<typeof client.porting_orders.phone_number_configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.phone_number_configurations.$post(args, options))
}

export async function getPortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$get(args, options))
}

export async function deletePortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$delete(args, options))
}

export async function patchPortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$patch(args, options))
}

export async function postPortingOrdersIdActionsActivate(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.activate.$post(args, options))
}

export async function postPortingOrdersIdActionsCancel(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.cancel.$post(args, options))
}

export async function postPortingOrdersIdActionsConfirm(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.confirm.$post(args, options))
}

export async function postPortingOrdersIdActionsShare(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.share.$post(args, options))
}

export async function getPortingOrdersIdActivationJobs(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].activation_jobs.$get(args, options))
}

export async function getPortingOrdersIdActivationJobsActivationJobId(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].activation_jobs[':activationJobId'].$get(args, options),
  )
}

export async function patchPortingOrdersIdActivationJobsActivationJobId(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].activation_jobs[':activationJobId'].$patch(args, options),
  )
}

export async function getPortingOrdersIdAdditionalDocuments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['additional_documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].additional_documents.$get(args, options))
}

export async function postPortingOrdersIdAdditionalDocuments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['additional_documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].additional_documents.$post(args, options))
}

export async function deletePortingOrdersIdAdditionalDocumentsAdditionalDocumentId(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['additional_documents'][':additional_document_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].additional_documents[':additional_document_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPortingOrdersIdAllowedFocWindows(
  args: InferRequestType<(typeof client.porting_orders)[':id']['allowed_foc_windows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].allowed_foc_windows.$get(args, options))
}

export async function getPortingOrdersIdComments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].comments.$get(args, options))
}

export async function postPortingOrdersIdComments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].comments.$post(args, options))
}

export async function getPortingOrdersIdLoaTemplate(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].loa_template.$get(args, options))
}

export async function getPortingOrdersIdRequirements(
  args: InferRequestType<(typeof client.porting_orders)[':id']['requirements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].requirements.$get(args, options))
}

export async function getPortingOrdersIdSubRequest(
  args: InferRequestType<(typeof client.porting_orders)[':id']['sub_request']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].sub_request.$get(args, options))
}

export async function getPortingOrdersIdVerificationCodes(
  args: InferRequestType<(typeof client.porting_orders)[':id']['verification_codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].verification_codes.$get(args, options))
}

export async function postPortingOrdersIdVerificationCodesSend(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['verification_codes']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].verification_codes.send.$post(args, options),
  )
}

export async function postPortingOrdersIdVerificationCodesVerify(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['verification_codes']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].verification_codes.verify.$post(args, options),
  )
}

export async function getPortingOrdersPortingOrderIdActionRequirements(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['action_requirements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].action_requirements.$get(args, options),
  )
}

export async function postPortingOrdersPortingOrderIdActionRequirementsIdInitiate(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['action_requirements'][':id']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].action_requirements[':id'].initiate.$post(
      args,
      options,
    ),
  )
}

export async function getPortingOrdersPortingOrderIdAssociatedPhoneNumbers(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['associated_phone_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].associated_phone_numbers.$get(args, options),
  )
}

export async function postPortingOrdersPortingOrderIdAssociatedPhoneNumbers(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['associated_phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].associated_phone_numbers.$post(args, options),
  )
}

export async function deletePortingOrdersPortingOrderIdAssociatedPhoneNumbersId(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['associated_phone_numbers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].associated_phone_numbers[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPortingOrdersPortingOrderIdPhoneNumberBlocks(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_blocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_blocks.$get(args, options),
  )
}

export async function postPortingOrdersPortingOrderIdPhoneNumberBlocks(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_blocks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_blocks.$post(args, options),
  )
}

export async function deletePortingOrdersPortingOrderIdPhoneNumberBlocksId(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_blocks'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_blocks[':id'].$delete(args, options),
  )
}

export async function getPortingOrdersPortingOrderIdPhoneNumberExtensions(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_extensions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_extensions.$get(args, options),
  )
}

export async function postPortingOrdersPortingOrderIdPhoneNumberExtensions(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_extensions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_extensions.$post(args, options),
  )
}

export async function deletePortingOrdersPortingOrderIdPhoneNumberExtensionsId(
  args: InferRequestType<
    (typeof client.porting_orders)[':porting_order_id']['phone_number_extensions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':porting_order_id'].phone_number_extensions[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPortingPhoneNumbers(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_phone_numbers.$get(args, options))
}

export async function getPortouts(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.$get(args, options))
}

export async function getPortoutsEvents(
  args: InferRequestType<typeof client.portouts.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.events.$get(args, options))
}

export async function getPortoutsEventsId(
  args: InferRequestType<(typeof client.portouts.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.events[':id'].$get(args, options))
}

export async function postPortoutsEventsIdRepublish(
  args: InferRequestType<(typeof client.portouts.events)[':id']['republish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.events[':id'].republish.$post(args, options))
}

export async function getPortoutsRejectionsPortoutId(
  args: InferRequestType<(typeof client.portouts.rejections)[':portout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.rejections[':portout_id'].$get(args, options))
}

export async function getPortoutsReports(
  args: InferRequestType<typeof client.portouts.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.reports.$get(args, options))
}

export async function postPortoutsReports(
  args: InferRequestType<typeof client.portouts.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.reports.$post(args, options))
}

export async function getPortoutsReportsId(
  args: InferRequestType<(typeof client.portouts.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.reports[':id'].$get(args, options))
}

export async function getPortoutsId(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].$get(args, options))
}

export async function getPortoutsIdComments(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].comments.$get(args, options))
}

export async function postPortoutsIdComments(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].comments.$post(args, options))
}

export async function getPortoutsIdSupportingDocuments(
  args: InferRequestType<(typeof client.portouts)[':id']['supporting_documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].supporting_documents.$get(args, options))
}

export async function postPortoutsIdSupportingDocuments(
  args: InferRequestType<(typeof client.portouts)[':id']['supporting_documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].supporting_documents.$post(args, options))
}

export async function patchPortoutsIdStatus(
  args: InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'][':status'].$patch(args, options))
}

export async function getPricingProducts(
  args: InferRequestType<typeof client.pricing.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.products.$get(args, options))
}

export async function getPricingProductsSlug(
  args: InferRequestType<(typeof client.pricing.products)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing.products[':slug'].$get(args, options))
}

export async function getPrivateWirelessGateways(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways.$get(args, options))
}

export async function postPrivateWirelessGateways(
  args: InferRequestType<typeof client.private_wireless_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways.$post(args, options))
}

export async function getPrivateWirelessGatewaysId(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways[':id'].$get(args, options))
}

export async function deletePrivateWirelessGatewaysId(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways[':id'].$delete(args, options))
}

export async function getPronunciationDicts(
  args: InferRequestType<typeof client.pronunciation_dicts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pronunciation_dicts.$get(args, options))
}

export async function postPronunciationDicts(
  args: InferRequestType<typeof client.pronunciation_dicts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pronunciation_dicts.$post(args, options))
}

export async function getPronunciationDictsId(
  args: InferRequestType<(typeof client.pronunciation_dicts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pronunciation_dicts[':id'].$get(args, options))
}

export async function deletePronunciationDictsId(
  args: InferRequestType<(typeof client.pronunciation_dicts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pronunciation_dicts[':id'].$delete(args, options))
}

export async function patchPronunciationDictsId(
  args: InferRequestType<(typeof client.pronunciation_dicts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pronunciation_dicts[':id'].$patch(args, options))
}

export async function getPublicInternetGateways(
  args: InferRequestType<typeof client.public_internet_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_internet_gateways.$get(args, options))
}

export async function postPublicInternetGateways(
  args: InferRequestType<typeof client.public_internet_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_internet_gateways.$post(args, options))
}

export async function getPublicInternetGatewaysId(
  args: InferRequestType<(typeof client.public_internet_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_internet_gateways[':id'].$get(args, options))
}

export async function deletePublicInternetGatewaysId(
  args: InferRequestType<(typeof client.public_internet_gateways)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public_internet_gateways[':id'].$delete(args, options))
}

export async function getQueues(
  args: InferRequestType<typeof client.queues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues.$get(args, options))
}

export async function postQueues(
  args: InferRequestType<typeof client.queues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues.$post(args, options))
}

export async function getQueuesQueueName(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].$get(args, options))
}

export async function postQueuesQueueName(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].$post(args, options))
}

export async function deleteQueuesQueueName(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].$delete(args, options))
}

export async function getQueuesQueueNameCalls(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].calls.$get(args, options))
}

export async function getQueuesQueueNameCallsCallControlId(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queue_name'].calls[':call_control_id'].$get(args, options),
  )
}

export async function deleteQueuesQueueNameCallsCallControlId(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queue_name'].calls[':call_control_id'].$delete(args, options),
  )
}

export async function patchQueuesQueueNameCallsCallControlId(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queue_name'].calls[':call_control_id'].$patch(args, options),
  )
}

export async function getRcsAgents(
  args: InferRequestType<typeof client.rcs.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents.$get(args, options))
}

export async function postRcsAgents(
  args: InferRequestType<typeof client.rcs.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents.$post(args, options))
}

export async function getRcsAgentsId(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].$get(args, options))
}

export async function patchRcsAgentsId(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].$patch(args, options))
}

export async function getRcsAgentsIdCarrierApprovals(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['carrier_approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].carrier_approvals.$get(args, options))
}

export async function postRcsAgentsIdLaunch(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['launch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].launch.$post(args, options))
}

export async function postRcsAgentsIdSubmit(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].submit.$post(args, options))
}

export async function getRcsAgentsIdTestDevices(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['test_devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].test_devices.$get(args, options))
}

export async function postRcsAgentsIdTestDevices(
  args: InferRequestType<(typeof client.rcs.agents)[':id']['test_devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.agents[':id'].test_devices.$post(args, options))
}

export async function deleteRcsAgentsIdTestDevicesTestDeviceId(
  args: InferRequestType<
    (typeof client.rcs.agents)[':id']['test_devices'][':test_device_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rcs.agents[':id'].test_devices[':test_device_id'].$delete(args, options),
  )
}

export async function getRcsBrands(options?: ClientRequestOptions) {
  return await parseResponse(client.rcs.brands.$get(undefined, options))
}

export async function postRcsBrands(
  args: InferRequestType<typeof client.rcs.brands.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.brands.$post(args, options))
}

export async function getRcsBrandsId(
  args: InferRequestType<(typeof client.rcs.brands)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.brands[':id'].$get(args, options))
}

export async function patchRcsBrandsId(
  args: InferRequestType<(typeof client.rcs.brands)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.brands[':id'].$patch(args, options))
}

export async function postRcsBrandsIdSubmit(
  args: InferRequestType<(typeof client.rcs.brands)[':id']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rcs.brands[':id'].submit.$post(args, options))
}

export async function getRecordingTranscriptions(
  args: InferRequestType<typeof client.recording_transcriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recording_transcriptions.$get(args, options))
}

export async function getRecordingTranscriptionsRecordingTranscriptionId(
  args: InferRequestType<
    (typeof client.recording_transcriptions)[':recording_transcription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recording_transcriptions[':recording_transcription_id'].$get(args, options),
  )
}

export async function deleteRecordingTranscriptionsRecordingTranscriptionId(
  args: InferRequestType<
    (typeof client.recording_transcriptions)[':recording_transcription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recording_transcriptions[':recording_transcription_id'].$delete(args, options),
  )
}

export async function getRecordings(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.$get(args, options))
}

export async function postRecordingsActionsDelete(
  args: InferRequestType<typeof client.recordings.actions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.actions.delete.$post(args, options))
}

export async function getRecordingsRecordingId(
  args: InferRequestType<(typeof client.recordings)[':recording_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings[':recording_id'].$get(args, options))
}

export async function deleteRecordingsRecordingId(
  args: InferRequestType<(typeof client.recordings)[':recording_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings[':recording_id'].$delete(args, options))
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}

export async function getRegulatoryRequirements(
  args: InferRequestType<typeof client.regulatory_requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regulatory_requirements.$get(args, options))
}

export async function getReportsCdrUsageReportsSync(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.cdr_usage_reports.sync.$get(args, options))
}

export async function getReportsMdrUsageReports(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.$get(args, options))
}

export async function postReportsMdrUsageReports(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.$post(args, options))
}

export async function getReportsMdrUsageReportsSync(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.sync.$get(args, options))
}

export async function getReportsMdrUsageReportsId(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports[':id'].$get(args, options))
}

export async function deleteReportsMdrUsageReportsId(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports[':id'].$delete(args, options))
}

export async function getReportsMdrs(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdrs.$get(args, options))
}

export async function getReportsWdrs(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.wdrs.$get(args, options))
}

export async function getReputationNumbers(
  args: InferRequestType<typeof client.reputation.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reputation.numbers.$get(args, options))
}

export async function getReputationNumbersPhoneNumber(
  args: InferRequestType<(typeof client.reputation.numbers)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reputation.numbers[':phone_number'].$get(args, options))
}

export async function deleteReputationNumbersPhoneNumber(
  args: InferRequestType<(typeof client.reputation.numbers)[':phone_number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reputation.numbers[':phone_number'].$delete(args, options))
}

export async function getRequirementGroups(
  args: InferRequestType<typeof client.requirement_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_groups.$get(args, options))
}

export async function postRequirementGroups(
  args: InferRequestType<typeof client.requirement_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_groups.$post(args, options))
}

export async function getRequirementGroupsId(
  args: InferRequestType<(typeof client.requirement_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_groups[':id'].$get(args, options))
}

export async function deleteRequirementGroupsId(
  args: InferRequestType<(typeof client.requirement_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_groups[':id'].$delete(args, options))
}

export async function patchRequirementGroupsId(
  args: InferRequestType<(typeof client.requirement_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_groups[':id'].$patch(args, options))
}

export async function postRequirementGroupsIdSubmitForApproval(
  args: InferRequestType<(typeof client.requirement_groups)[':id']['submit_for_approval']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.requirement_groups[':id'].submit_for_approval.$post(args, options),
  )
}

export async function getRequirementTypes(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_types.$get(args, options))
}

export async function getRequirementTypesId(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_types[':id'].$get(args, options))
}

export async function getRequirements(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements.$get(args, options))
}

export async function getRequirementsId(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements[':id'].$get(args, options))
}

export async function postRequirementsIdVersions(
  args: InferRequestType<(typeof client.requirements)[':id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements[':id'].versions.$post(args, options))
}

export async function deleteRequirementsIdVersionsPending(
  args: InferRequestType<(typeof client.requirements)[':id']['versions']['pending']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements[':id'].versions.pending.$delete(args, options))
}

export async function getRoomCompositions(
  args: InferRequestType<typeof client.room_compositions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_compositions.$get(args, options))
}

export async function postRoomCompositions(
  args: InferRequestType<typeof client.room_compositions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_compositions.$post(args, options))
}

export async function getRoomCompositionsRoomCompositionId(
  args: InferRequestType<(typeof client.room_compositions)[':room_composition_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_compositions[':room_composition_id'].$get(args, options))
}

export async function deleteRoomCompositionsRoomCompositionId(
  args: InferRequestType<(typeof client.room_compositions)[':room_composition_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_compositions[':room_composition_id'].$delete(args, options),
  )
}

export async function getRoomParticipants(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_participants.$get(args, options))
}

export async function getRoomParticipantsRoomParticipantId(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_participants[':room_participant_id'].$get(args, options))
}

export async function getRoomRecordings(
  args: InferRequestType<typeof client.room_recordings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_recordings.$get(args, options))
}

export async function deleteRoomRecordings(
  args: InferRequestType<typeof client.room_recordings.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_recordings.$delete(args, options))
}

export async function getRoomRecordingsRoomRecordingId(
  args: InferRequestType<(typeof client.room_recordings)[':room_recording_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_recordings[':room_recording_id'].$get(args, options))
}

export async function deleteRoomRecordingsRoomRecordingId(
  args: InferRequestType<(typeof client.room_recordings)[':room_recording_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_recordings[':room_recording_id'].$delete(args, options))
}

export async function getRoomSessions(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_sessions.$get(args, options))
}

export async function getRoomSessionsRoomSessionId(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_sessions[':room_session_id'].$get(args, options))
}

export async function postRoomSessionsRoomSessionIdActionsEnd(
  args: InferRequestType<
    (typeof client.room_sessions)[':room_session_id']['actions']['end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].actions.end.$post(args, options),
  )
}

export async function postRoomSessionsRoomSessionIdActionsKick(
  args: InferRequestType<
    (typeof client.room_sessions)[':room_session_id']['actions']['kick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].actions.kick.$post(args, options),
  )
}

export async function postRoomSessionsRoomSessionIdActionsMute(
  args: InferRequestType<
    (typeof client.room_sessions)[':room_session_id']['actions']['mute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].actions.mute.$post(args, options),
  )
}

export async function postRoomSessionsRoomSessionIdActionsUnmute(
  args: InferRequestType<
    (typeof client.room_sessions)[':room_session_id']['actions']['unmute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].actions.unmute.$post(args, options),
  )
}

export async function getRoomSessionsRoomSessionIdParticipants(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].participants.$get(args, options),
  )
}

export async function getRooms(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$get(args, options))
}

export async function postRooms(
  args: InferRequestType<typeof client.rooms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$post(args, options))
}

export async function getRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].$get(args, options))
}

export async function deleteRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].$delete(args, options))
}

export async function patchRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].$patch(args, options))
}

export async function postRoomsRoomIdActionsGenerateJoinClientToken(
  args: InferRequestType<
    (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rooms[':room_id'].actions.generate_join_client_token.$post(args, options),
  )
}

export async function postRoomsRoomIdActionsRefreshClientToken(
  args: InferRequestType<
    (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rooms[':room_id'].actions.refresh_client_token.$post(args, options),
  )
}

export async function getRoomsRoomIdSessions(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].sessions.$get(args, options))
}

export async function getSessionAnalysisMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.session_analysis.metadata.$get(undefined, options))
}

export async function getSessionAnalysisMetadataRecordType(
  args: InferRequestType<(typeof client.session_analysis.metadata)[':record_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session_analysis.metadata[':record_type'].$get(args, options))
}

export async function getSessionAnalysisRecordTypeEventId(
  args: InferRequestType<(typeof client.session_analysis)[':record_type'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.session_analysis[':record_type'][':event_id'].$get(args, options),
  )
}

export async function getSetiBlackBoxTestResults(
  args: InferRequestType<typeof client.seti.black_box_test_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seti.black_box_test_results.$get(args, options))
}

export async function getShortCodes(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes.$get(args, options))
}

export async function getShortCodesId(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes[':id'].$get(args, options))
}

export async function patchShortCodesId(
  args: InferRequestType<(typeof client.short_codes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes[':id'].$patch(args, options))
}

export async function getSimCardActions(
  args: InferRequestType<typeof client.sim_card_actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_actions.$get(args, options))
}

export async function getSimCardActionsId(
  args: InferRequestType<(typeof client.sim_card_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_actions[':id'].$get(args, options))
}

export async function getSimCardDataUsageNotifications(
  args: InferRequestType<typeof client.sim_card_data_usage_notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_data_usage_notifications.$get(args, options))
}

export async function postSimCardDataUsageNotifications(
  args: InferRequestType<typeof client.sim_card_data_usage_notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_data_usage_notifications.$post(args, options))
}

export async function getSimCardDataUsageNotificationsId(
  args: InferRequestType<(typeof client.sim_card_data_usage_notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_data_usage_notifications[':id'].$get(args, options))
}

export async function deleteSimCardDataUsageNotificationsId(
  args: InferRequestType<(typeof client.sim_card_data_usage_notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_data_usage_notifications[':id'].$delete(args, options))
}

export async function patchSimCardDataUsageNotificationsId(
  args: InferRequestType<(typeof client.sim_card_data_usage_notifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_data_usage_notifications[':id'].$patch(args, options))
}

export async function getSimCardGroupActions(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_group_actions.$get(args, options))
}

export async function getSimCardGroupActionsId(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_group_actions[':id'].$get(args, options))
}

export async function getSimCardGroups(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups.$get(args, options))
}

export async function postSimCardGroups(
  args: InferRequestType<typeof client.sim_card_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups.$post(args, options))
}

export async function getSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$get(args, options))
}

export async function deleteSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$delete(args, options))
}

export async function patchSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$patch(args, options))
}

export async function postSimCardGroupsIdActionsRemovePrivateWirelessGateway(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.remove_private_wireless_gateway.$post(args, options),
  )
}

export async function postSimCardGroupsIdActionsRemoveWirelessBlocklist(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['remove_wireless_blocklist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.remove_wireless_blocklist.$post(args, options),
  )
}

export async function postSimCardGroupsIdActionsSetPrivateWirelessGateway(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.set_private_wireless_gateway.$post(args, options),
  )
}

export async function postSimCardGroupsIdActionsSetWirelessBlocklist(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['set_wireless_blocklist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.set_wireless_blocklist.$post(args, options),
  )
}

export async function postSimCardOrderPreview(
  args: InferRequestType<typeof client.sim_card_order_preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_order_preview.$post(args, options))
}

export async function getSimCardOrders(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders.$get(args, options))
}

export async function postSimCardOrders(
  args: InferRequestType<typeof client.sim_card_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders.$post(args, options))
}

export async function getSimCardOrdersId(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders[':id'].$get(args, options))
}

export async function getSimCards(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards.$get(args, options))
}

export async function postSimCardsActionsBulkDisableVoice(
  args: InferRequestType<typeof client.sim_cards.actions.bulk_disable_voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards.actions.bulk_disable_voice.$post(args, options))
}

export async function postSimCardsActionsBulkEnableVoice(
  args: InferRequestType<typeof client.sim_cards.actions.bulk_enable_voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards.actions.bulk_enable_voice.$post(args, options))
}

export async function postSimCardsActionsBulkSetPublicIps(
  args: InferRequestType<typeof client.sim_cards.actions.bulk_set_public_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards.actions.bulk_set_public_ips.$post(args, options))
}

export async function postSimCardsActionsValidateRegistrationCodes(
  args: InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards.actions.validate_registration_codes.$post(args, options),
  )
}

export async function getSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$get(args, options))
}

export async function deleteSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$delete(args, options))
}

export async function patchSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$patch(args, options))
}

export async function postSimCardsIdActionsDisable(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.disable.$post(args, options))
}

export async function postSimCardsIdActionsDisableVoice(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable_voice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.disable_voice.$post(args, options))
}

export async function postSimCardsIdActionsEnable(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.enable.$post(args, options))
}

export async function postSimCardsIdActionsEnableVoice(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable_voice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.enable_voice.$post(args, options))
}

export async function postSimCardsIdActionsRemovePublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['remove_public_ip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.remove_public_ip.$post(args, options))
}

export async function postSimCardsIdActionsSetPublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_public_ip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.set_public_ip.$post(args, options))
}

export async function postSimCardsIdActionsSetStandby(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.set_standby.$post(args, options))
}

export async function getSimCardsIdActivationCode(
  args: InferRequestType<(typeof client.sim_cards)[':id']['activation_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].activation_code.$get(args, options))
}

export async function getSimCardsIdDeviceDetails(
  args: InferRequestType<(typeof client.sim_cards)[':id']['device_details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].device_details.$get(args, options))
}

export async function getSimCardsIdPublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':id']['public_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].public_ip.$get(args, options))
}

export async function getSimCardsIdWirelessConnectivityLogs(
  args: InferRequestType<(typeof client.sim_cards)[':id']['wireless_connectivity_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].wireless_connectivity_logs.$get(args, options))
}

export async function getSipRegistrationStatus(
  args: InferRequestType<typeof client.sip_registration_status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sip_registration_status.$get(args, options))
}

export async function postSiprecConnectors(
  args: InferRequestType<typeof client.siprec_connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.siprec_connectors.$post(args, options))
}

export async function getSiprecConnectorsConnectorName(
  args: InferRequestType<(typeof client.siprec_connectors)[':connector_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.siprec_connectors[':connector_name'].$get(args, options))
}

export async function putSiprecConnectorsConnectorName(
  args: InferRequestType<(typeof client.siprec_connectors)[':connector_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.siprec_connectors[':connector_name'].$put(args, options))
}

export async function deleteSiprecConnectorsConnectorName(
  args: InferRequestType<(typeof client.siprec_connectors)[':connector_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.siprec_connectors[':connector_name'].$delete(args, options))
}

export async function getSpeechToTextProviders(
  args: InferRequestType<(typeof client)['speech-to-text']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['speech-to-text'].providers.$get(args, options))
}

export async function getSpeechToTextTranscription(
  args: InferRequestType<(typeof client)['speech-to-text']['transcription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['speech-to-text'].transcription.$get(args, options))
}

export async function getSpendLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.spend_limits.$get(undefined, options))
}

export async function postSpendLimits(
  args: InferRequestType<typeof client.spend_limits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spend_limits.$post(args, options))
}

export async function deleteSpendLimitsProduct(
  args: InferRequestType<(typeof client.spend_limits)[':product']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spend_limits[':product'].$delete(args, options))
}

export async function patchSpendLimitsProduct(
  args: InferRequestType<(typeof client.spend_limits)[':product']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spend_limits[':product'].$patch(args, options))
}

export async function getStorageBucketsBucketNameSslCertificate(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketName']['ssl_certificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketName'].ssl_certificate.$get(args, options),
  )
}

export async function putStorageBucketsBucketNameSslCertificate(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketName']['ssl_certificate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketName'].ssl_certificate.$put(args, options),
  )
}

export async function deleteStorageBucketsBucketNameSslCertificate(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketName']['ssl_certificate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketName'].ssl_certificate.$delete(args, options),
  )
}

export async function getStorageBucketsBucketNameUsageApi(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketName']['usage']['api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketName'].usage.api.$get(args, options))
}

export async function getStorageBucketsBucketNameUsageStorage(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketName']['usage']['storage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketName'].usage.storage.$get(args, options),
  )
}

export async function postStorageBucketsBucketNameObjectNamePresignedUrl(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketName'][':objectName']['presigned_url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketName'][':objectName'].presigned_url.$post(args, options),
  )
}

export async function getStorageCloudfs(
  args: InferRequestType<typeof client.storage.cloudfs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.cloudfs.$get(args, options))
}

export async function postStorageCloudfs(
  args: InferRequestType<typeof client.storage.cloudfs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.cloudfs.$post(args, options))
}

export async function getStorageCloudfsId(
  args: InferRequestType<(typeof client.storage.cloudfs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.cloudfs[':id'].$get(args, options))
}

export async function deleteStorageCloudfsId(
  args: InferRequestType<(typeof client.storage.cloudfs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.cloudfs[':id'].$delete(args, options))
}

export async function patchStorageCloudfsId(
  args: InferRequestType<(typeof client.storage.cloudfs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.cloudfs[':id'].$patch(args, options))
}

export async function postStorageCloudfsIdActionsRotateMetaToken(
  args: InferRequestType<
    (typeof client.storage.cloudfs)[':id']['actions']['rotate-meta-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.cloudfs[':id'].actions['rotate-meta-token'].$post(args, options),
  )
}

export async function getStorageKvs(
  args: InferRequestType<typeof client.storage.kvs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs.$get(args, options))
}

export async function postStorageKvs(
  args: InferRequestType<typeof client.storage.kvs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs.$post(args, options))
}

export async function getStorageKvsId(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].$get(args, options))
}

export async function deleteStorageKvsId(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].$delete(args, options))
}

export async function getStorageKvsIdKeys(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].keys.$get(args, options))
}

export async function getStorageKvsIdKeysKey(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].keys[':key'].$get(args, options))
}

export async function putStorageKvsIdKeysKey(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['keys'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].keys[':key'].$put(args, options))
}

export async function deleteStorageKvsIdKeysKey(
  args: InferRequestType<(typeof client.storage.kvs)[':id']['keys'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.kvs[':id'].keys[':key'].$delete(args, options))
}

export async function getStorageMigrationSourceCoverage(options?: ClientRequestOptions) {
  return await parseResponse(client.storage.migration_source_coverage.$get(undefined, options))
}

export async function getStorageMigrationSources(options?: ClientRequestOptions) {
  return await parseResponse(client.storage.migration_sources.$get(undefined, options))
}

export async function postStorageMigrationSources(
  args: InferRequestType<typeof client.storage.migration_sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migration_sources.$post(args, options))
}

export async function getStorageMigrationSourcesId(
  args: InferRequestType<(typeof client.storage.migration_sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migration_sources[':id'].$get(args, options))
}

export async function deleteStorageMigrationSourcesId(
  args: InferRequestType<(typeof client.storage.migration_sources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migration_sources[':id'].$delete(args, options))
}

export async function getStorageMigrations(options?: ClientRequestOptions) {
  return await parseResponse(client.storage.migrations.$get(undefined, options))
}

export async function postStorageMigrations(
  args: InferRequestType<typeof client.storage.migrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migrations.$post(args, options))
}

export async function getStorageMigrationsId(
  args: InferRequestType<(typeof client.storage.migrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migrations[':id'].$get(args, options))
}

export async function postStorageMigrationsIdActionsStop(
  args: InferRequestType<(typeof client.storage.migrations)[':id']['actions']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.migrations[':id'].actions.stop.$post(args, options))
}

export async function getStorageSqldbs(
  args: InferRequestType<typeof client.storage.sqldbs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.sqldbs.$get(args, options))
}

export async function postStorageSqldbs(
  args: InferRequestType<typeof client.storage.sqldbs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.sqldbs.$post(args, options))
}

export async function getStorageSqldbsId(
  args: InferRequestType<(typeof client.storage.sqldbs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.sqldbs[':id'].$get(args, options))
}

export async function deleteStorageSqldbsId(
  args: InferRequestType<(typeof client.storage.sqldbs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.sqldbs[':id'].$delete(args, options))
}

export async function postStorageSqldbsIdActionsQuery(
  args: InferRequestType<(typeof client.storage.sqldbs)[':id']['actions']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.sqldbs[':id'].actions.query.$post(args, options))
}

export async function getSubNumberOrders(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders.$get(args, options))
}

export async function postSubNumberOrdersReport(
  args: InferRequestType<typeof client.sub_number_orders.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders.report.$post(args, options))
}

export async function getSubNumberOrdersReportReportId(
  args: InferRequestType<(typeof client.sub_number_orders.report)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders.report[':report_id'].$get(args, options))
}

export async function getSubNumberOrdersReportReportIdDownload(
  args: InferRequestType<
    (typeof client.sub_number_orders.report)[':report_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sub_number_orders.report[':report_id'].download.$get(args, options),
  )
}

export async function postSubNumberOrdersIdRequirementGroup(
  args: InferRequestType<(typeof client.sub_number_orders)[':id']['requirement_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders[':id'].requirement_group.$post(args, options))
}

export async function getSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders[':sub_number_order_id'].$get(args, options))
}

export async function patchSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders[':sub_number_order_id'].$patch(args, options))
}

export async function patchSubNumberOrdersSubNumberOrderIdCancel(
  args: InferRequestType<
    (typeof client.sub_number_orders)[':sub_number_order_id']['cancel']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sub_number_orders[':sub_number_order_id'].cancel.$patch(args, options),
  )
}

export async function postSubNumberOrdersReport2(
  args: InferRequestType<typeof client.sub_number_orders_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders_report.$post(args, options))
}

export async function getSubNumberOrdersReportReportId2(
  args: InferRequestType<(typeof client.sub_number_orders_report)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders_report[':report_id'].$get(args, options))
}

export async function getSubNumberOrdersReportReportIdDownload2(
  args: InferRequestType<
    (typeof client.sub_number_orders_report)[':report_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sub_number_orders_report[':report_id'].download.$get(args, options),
  )
}

export async function getTailscaleSubnetRouters(
  args: InferRequestType<typeof client.tailscale_subnet_routers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailscale_subnet_routers.$get(args, options))
}

export async function postTailscaleSubnetRouters(
  args: InferRequestType<typeof client.tailscale_subnet_routers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailscale_subnet_routers.$post(args, options))
}

export async function getTailscaleSubnetRoutersId(
  args: InferRequestType<(typeof client.tailscale_subnet_routers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailscale_subnet_routers[':id'].$get(args, options))
}

export async function deleteTailscaleSubnetRoutersId(
  args: InferRequestType<(typeof client.tailscale_subnet_routers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailscale_subnet_routers[':id'].$delete(args, options))
}

export async function patchTailscaleSubnetRoutersId(
  args: InferRequestType<(typeof client.tailscale_subnet_routers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tailscale_subnet_routers[':id'].$patch(args, options))
}

export async function getTelephonyCredentials(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials.$get(args, options))
}

export async function postTelephonyCredentials(
  args: InferRequestType<typeof client.telephony_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials.$post(args, options))
}

export async function getTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$get(args, options))
}

export async function deleteTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$delete(args, options))
}

export async function patchTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$patch(args, options))
}

export async function postTelephonyCredentialsIdToken(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].token.$post(args, options))
}

export async function getTelephonyCredentialsIdTokenMaterial(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['token_material']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].token_material.$get(args, options))
}

export async function getTermsOfServiceAgreements(
  args: InferRequestType<typeof client.terms_of_service.agreements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_service.agreements.$get(args, options))
}

export async function getTermsOfServiceAgreementsAgreementId(
  args: InferRequestType<(typeof client.terms_of_service.agreements)[':agreement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.terms_of_service.agreements[':agreement_id'].$get(args, options),
  )
}

export async function postTermsOfServiceBrandedCallingAgree(options?: ClientRequestOptions) {
  return await parseResponse(
    client.terms_of_service.branded_calling.agree.$post(undefined, options),
  )
}

export async function getTermsOfServiceInfo(
  args: InferRequestType<typeof client.terms_of_service.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_service.info.$get(args, options))
}

export async function postTermsOfServiceNumberReputationAgree(options?: ClientRequestOptions) {
  return await parseResponse(
    client.terms_of_service.number_reputation.agree.$post(undefined, options),
  )
}

export async function getTermsOfServiceStatus(
  args: InferRequestType<typeof client.terms_of_service.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_service.status.$get(args, options))
}

export async function getTexmlAccountsAccountSidCalls(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.Accounts[':account_sid'].Calls.$get(args, options))
}

export async function postTexmlAccountsAccountSidCalls(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Calls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.Accounts[':account_sid'].Calls.$post(args, options))
}

export async function getTexmlAccountsAccountSidCallsCallSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid'].$get(args, options),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid'].$post(args, options),
  )
}

export async function getTexmlAccountsAccountSidCallsCallSidRecordingsJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid']['Recordings.json'].$get(args, options),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidRecordingsJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Recordings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid']['Recordings.json'].$post(
      args,
      options,
    ),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Recordings'][':recording_sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid'].Recordings[
      ':recording_sid.json'
    ].$post(args, options),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidSiprecJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Siprec.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid']['Siprec.json'].$post(args, options),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Siprec'][':siprec_sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid'].Siprec[':siprec_sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidStreamsJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Streams.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid']['Streams.json'].$post(args, options),
  )
}

export async function postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Calls'][':call_sid']['Streams'][':streaming_sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Calls[':call_sid'].Streams[':streaming_sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function getTexmlAccountsAccountSidConferences(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Conferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.Accounts[':account_sid'].Conferences.$get(args, options))
}

export async function getTexmlAccountsAccountSidConferencesConferenceSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].$get(args, options),
  )
}

export async function postTexmlAccountsAccountSidConferencesConferenceSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].$post(args, options),
  )
}

export async function getTexmlAccountsAccountSidConferencesConferenceSidParticipants(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Participants.$get(
      args,
      options,
    ),
  )
}

export async function postTexmlAccountsAccountSidConferencesConferenceSidParticipants(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Participants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Participants.$post(
      args,
      options,
    ),
  )
}

export async function getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabel(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Participants'][':call_sid_or_participant_label']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Participants[
      ':call_sid_or_participant_label'
    ].$get(args, options),
  )
}

export async function postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabel(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Participants'][':call_sid_or_participant_label']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Participants[
      ':call_sid_or_participant_label'
    ].$post(args, options),
  )
}

export async function deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabel(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Participants'][':call_sid_or_participant_label']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Participants[
      ':call_sid_or_participant_label'
    ].$delete(args, options),
  )
}

export async function getTexmlAccountsAccountSidConferencesConferenceSidRecordings(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Recordings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid'].Recordings.$get(
      args,
      options,
    ),
  )
}

export async function getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Conferences'][':conference_sid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Conferences[':conference_sid']['Recordings.json'].$get(
      args,
      options,
    ),
  )
}

export async function getTexmlAccountsAccountSidQueues(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.Accounts[':account_sid'].Queues.$get(args, options))
}

export async function postTexmlAccountsAccountSidQueues(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.Accounts[':account_sid'].Queues.$post(args, options))
}

export async function getTexmlAccountsAccountSidQueuesQueueSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Queues'][':queue_sid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Queues[':queue_sid'].$get(args, options),
  )
}

export async function postTexmlAccountsAccountSidQueuesQueueSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Queues'][':queue_sid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Queues[':queue_sid'].$post(args, options),
  )
}

export async function deleteTexmlAccountsAccountSidQueuesQueueSid(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Queues'][':queue_sid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Queues[':queue_sid'].$delete(args, options),
  )
}

export async function getTexmlAccountsAccountSidRecordingsJson(
  args: InferRequestType<(typeof client.texml.Accounts)[':account_sid']['Recordings.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid']['Recordings.json'].$get(args, options),
  )
}

export async function getTexmlAccountsAccountSidRecordingsRecordingSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Recordings'][':recording_sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Recordings[':recording_sid.json'].$get(args, options),
  )
}

export async function deleteTexmlAccountsAccountSidRecordingsRecordingSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Recordings'][':recording_sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Recordings[':recording_sid.json'].$delete(args, options),
  )
}

export async function getTexmlAccountsAccountSidTranscriptionsJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Transcriptions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid']['Transcriptions.json'].$get(args, options),
  )
}

export async function getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Transcriptions'][':recording_transcription_sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Transcriptions[':recording_transcription_sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJson(
  args: InferRequestType<
    (typeof client.texml.Accounts)[':account_sid']['Transcriptions'][':recording_transcription_sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.texml.Accounts[':account_sid'].Transcriptions[
      ':recording_transcription_sid.json'
    ].$delete(args, options),
  )
}

export async function postTexmlAiCallsConnectionId(
  args: InferRequestType<(typeof client.texml.ai_calls)[':connection_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.ai_calls[':connection_id'].$post(args, options))
}

export async function postTexmlCallsConnectionId(
  args: InferRequestType<(typeof client.texml.calls)[':connection_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.calls[':connection_id'].$post(args, options))
}

export async function postTexmlSecrets(
  args: InferRequestType<typeof client.texml.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml.secrets.$post(args, options))
}

export async function getTexmlApplications(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications.$get(args, options))
}

export async function postTexmlApplications(
  args: InferRequestType<typeof client.texml_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications.$post(args, options))
}

export async function getTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$get(args, options))
}

export async function deleteTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$delete(args, options))
}

export async function patchTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$patch(args, options))
}

export async function getTextToSpeechSpeech(
  args: InferRequestType<(typeof client)['text-to-speech']['speech']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['text-to-speech'].speech.$get(args, options))
}

export async function postTextToSpeechSpeech(
  args: InferRequestType<(typeof client)['text-to-speech']['speech']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['text-to-speech'].speech.$post(args, options))
}

export async function getTextToSpeechVoices(
  args: InferRequestType<(typeof client)['text-to-speech']['voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['text-to-speech'].voices.$get(args, options))
}

export async function getTrafficPolicyProfiles(
  args: InferRequestType<typeof client.traffic.policy.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles.$get(args, options))
}

export async function postTrafficPolicyProfiles(
  args: InferRequestType<typeof client.traffic.policy.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles.$post(args, options))
}

export async function getTrafficPolicyProfilesServices(
  args: InferRequestType<typeof client.traffic.policy.profiles.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles.services.$get(args, options))
}

export async function getTrafficPolicyProfilesId(
  args: InferRequestType<(typeof client.traffic.policy.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles[':id'].$get(args, options))
}

export async function deleteTrafficPolicyProfilesId(
  args: InferRequestType<(typeof client.traffic.policy.profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles[':id'].$delete(args, options))
}

export async function patchTrafficPolicyProfilesId(
  args: InferRequestType<(typeof client.traffic.policy.profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic.policy.profiles[':id'].$patch(args, options))
}

export async function getTrafficPolicyProfiles2(
  args: InferRequestType<typeof client.traffic_policy_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles.$get(args, options))
}

export async function postTrafficPolicyProfiles2(
  args: InferRequestType<typeof client.traffic_policy_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles.$post(args, options))
}

export async function getTrafficPolicyProfilesServices2(
  args: InferRequestType<typeof client.traffic_policy_profiles.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles.services.$get(args, options))
}

export async function getTrafficPolicyProfilesId2(
  args: InferRequestType<(typeof client.traffic_policy_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles[':id'].$get(args, options))
}

export async function deleteTrafficPolicyProfilesId2(
  args: InferRequestType<(typeof client.traffic_policy_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles[':id'].$delete(args, options))
}

export async function patchTrafficPolicyProfilesId2(
  args: InferRequestType<(typeof client.traffic_policy_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_policy_profiles[':id'].$patch(args, options))
}

export async function getTunnels(
  args: InferRequestType<typeof client.tunnels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnels.$get(args, options))
}

export async function postTunnels(
  args: InferRequestType<typeof client.tunnels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnels.$post(args, options))
}

export async function getTunnelsId(
  args: InferRequestType<(typeof client.tunnels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnels[':id'].$get(args, options))
}

export async function deleteTunnelsId(
  args: InferRequestType<(typeof client.tunnels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnels[':id'].$delete(args, options))
}

export async function postTunnelsIdActionsRotateToken(
  args: InferRequestType<(typeof client.tunnels)[':id']['actions']['rotate_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnels[':id'].actions.rotate_token.$post(args, options))
}

export async function getUacConnections(
  args: InferRequestType<typeof client.uac_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uac_connections.$get(args, options))
}

export async function postUacConnections(
  args: InferRequestType<typeof client.uac_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uac_connections.$post(args, options))
}

export async function getUacConnectionsId(
  args: InferRequestType<(typeof client.uac_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uac_connections[':id'].$get(args, options))
}

export async function deleteUacConnectionsId(
  args: InferRequestType<(typeof client.uac_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uac_connections[':id'].$delete(args, options))
}

export async function patchUacConnectionsId(
  args: InferRequestType<(typeof client.uac_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uac_connections[':id'].$patch(args, options))
}

export async function postUacConnectionsIdActionsCheckRegistrationStatus(
  args: InferRequestType<
    (typeof client.uac_connections)[':id']['actions']['check_registration_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.uac_connections[':id'].actions.check_registration_status.$post(args, options),
  )
}

export async function getUsageReports(
  args: InferRequestType<typeof client.usage_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_reports.$get(args, options))
}

export async function getUsageReportsOptions(
  args: InferRequestType<typeof client.usage_reports.options.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_reports.options.$get(args, options))
}

export async function getUserAddresses(
  args: InferRequestType<typeof client.user.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.addresses.$get(args, options))
}

export async function postUserAddresses(
  args: InferRequestType<typeof client.user.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.addresses.$post(args, options))
}

export async function getUserAddressesId(
  args: InferRequestType<(typeof client.user.addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.addresses[':id'].$get(args, options))
}

export async function getUserAddresses2(
  args: InferRequestType<typeof client.user_addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_addresses.$get(args, options))
}

export async function postUserAddresses2(
  args: InferRequestType<typeof client.user_addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_addresses.$post(args, options))
}

export async function getUserAddressesId2(
  args: InferRequestType<(typeof client.user_addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_addresses[':id'].$get(args, options))
}

export async function getUserProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.user_profile.$get(undefined, options))
}

export async function patchUserProfile(
  args: InferRequestType<typeof client.user_profile.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_profile.$patch(args, options))
}

export async function getUserTags(
  args: InferRequestType<typeof client.user_tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_tags.$get(args, options))
}

export async function getV2WhatsappBusinessAccounts(
  args: InferRequestType<typeof client.v2.whatsapp.business_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.business_accounts.$get(args, options))
}

export async function getV2WhatsappBusinessAccountsId(
  args: InferRequestType<(typeof client.v2.whatsapp.business_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.business_accounts[':id'].$get(args, options))
}

export async function deleteV2WhatsappBusinessAccountsId(
  args: InferRequestType<(typeof client.v2.whatsapp.business_accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.business_accounts[':id'].$delete(args, options))
}

export async function getV2WhatsappBusinessAccountsIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.v2.whatsapp.business_accounts)[':id']['phone_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.business_accounts[':id'].phone_numbers.$get(args, options),
  )
}

export async function postV2WhatsappBusinessAccountsIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.v2.whatsapp.business_accounts)[':id']['phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.business_accounts[':id'].phone_numbers.$post(args, options),
  )
}

export async function getV2WhatsappBusinessAccountsIdSettings(
  args: InferRequestType<(typeof client.v2.whatsapp.business_accounts)[':id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.business_accounts[':id'].settings.$get(args, options),
  )
}

export async function patchV2WhatsappBusinessAccountsIdSettings(
  args: InferRequestType<
    (typeof client.v2.whatsapp.business_accounts)[':id']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.business_accounts[':id'].settings.$patch(args, options),
  )
}

export async function getV2WhatsappMessageTemplates(
  args: InferRequestType<typeof client.v2.whatsapp.message_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.message_templates.$get(args, options))
}

export async function postV2WhatsappMessageTemplates(
  args: InferRequestType<typeof client.v2.whatsapp.message_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.message_templates.$post(args, options))
}

export async function getV2WhatsappPhoneNumbers(
  args: InferRequestType<typeof client.v2.whatsapp.phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.phone_numbers.$get(args, options))
}

export async function getV2WhatsappPhoneNumbersPhoneNumber(
  args: InferRequestType<(typeof client.v2.whatsapp.phone_numbers)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.phone_numbers[':phone_number'].$get(args, options))
}

export async function deleteV2WhatsappPhoneNumbersPhoneNumber(
  args: InferRequestType<(typeof client.v2.whatsapp.phone_numbers)[':phone_number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].$delete(args, options),
  )
}

export async function getV2WhatsappPhoneNumbersPhoneNumberCallingSettings(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['calling_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].calling_settings.$get(args, options),
  )
}

export async function patchV2WhatsappPhoneNumbersPhoneNumberCallingSettings(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['calling_settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].calling_settings.$patch(args, options),
  )
}

export async function getV2WhatsappPhoneNumbersPhoneNumberConversationWindow(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['conversation_window']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].conversation_window.$get(args, options),
  )
}

export async function getV2WhatsappPhoneNumbersPhoneNumberConversationalComponents(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['conversational_components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].conversational_components.$get(args, options),
  )
}

export async function patchV2WhatsappPhoneNumbersPhoneNumberConversationalComponents(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['conversational_components']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].conversational_components.$patch(
      args,
      options,
    ),
  )
}

export async function getV2WhatsappPhoneNumbersPhoneNumberProfile(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['profile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].profile.$get(args, options),
  )
}

export async function patchV2WhatsappPhoneNumbersPhoneNumberProfile(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['profile']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].profile.$patch(args, options),
  )
}

export async function getV2WhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].profile.photo.$get(args, options),
  )
}

export async function postV2WhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].profile.photo.$post(args, options),
  )
}

export async function deleteV2WhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].profile.photo.$delete(args, options),
  )
}

export async function postV2WhatsappPhoneNumbersPhoneNumberResendVerification(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['resend_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].resend_verification.$post(args, options),
  )
}

export async function postV2WhatsappPhoneNumbersPhoneNumberVerify(
  args: InferRequestType<
    (typeof client.v2.whatsapp.phone_numbers)[':phone_number']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.whatsapp.phone_numbers[':phone_number'].verify.$post(args, options),
  )
}

export async function getV2WhatsappUserData(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.whatsapp.user_data.$get(undefined, options))
}

export async function patchV2WhatsappUserData(
  args: InferRequestType<typeof client.v2.whatsapp.user_data.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp.user_data.$patch(args, options))
}

export async function getV2WhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.v2.whatsapp_message_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp_message_templates[':id'].$get(args, options))
}

export async function deleteV2WhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.v2.whatsapp_message_templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp_message_templates[':id'].$delete(args, options))
}

export async function patchV2WhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.v2.whatsapp_message_templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.whatsapp_message_templates[':id'].$patch(args, options))
}

export async function getVerificationsByPhoneNumberPhoneNumber(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verifications.by_phone_number[':phone_number'].$get(args, options),
  )
}

export async function postVerificationsByPhoneNumberPhoneNumberActionsVerify(
  args: InferRequestType<
    (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verifications.by_phone_number[':phone_number'].actions.verify.$post(args, options),
  )
}

export async function postVerificationsCall(
  args: InferRequestType<typeof client.verifications.call.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.call.$post(args, options))
}

export async function postVerificationsFlashcall(
  args: InferRequestType<typeof client.verifications.flashcall.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.flashcall.$post(args, options))
}

export async function postVerificationsSms(
  args: InferRequestType<typeof client.verifications.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.sms.$post(args, options))
}

export async function postVerificationsWhatsapp(
  args: InferRequestType<typeof client.verifications.whatsapp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.whatsapp.$post(args, options))
}

export async function getVerificationsVerificationId(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications[':verification_id'].$get(args, options))
}

export async function postVerificationsVerificationIdActionsVerify(
  args: InferRequestType<
    (typeof client.verifications)[':verification_id']['actions']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verifications[':verification_id'].actions.verify.$post(args, options),
  )
}

export async function getVerifiedNumbers(
  args: InferRequestType<typeof client.verified_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_numbers.$get(args, options))
}

export async function postVerifiedNumbers(
  args: InferRequestType<typeof client.verified_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_numbers.$post(args, options))
}

export async function getVerifiedNumbersPhoneNumber(
  args: InferRequestType<(typeof client.verified_numbers)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_numbers[':phone_number'].$get(args, options))
}

export async function deleteVerifiedNumbersPhoneNumber(
  args: InferRequestType<(typeof client.verified_numbers)[':phone_number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verified_numbers[':phone_number'].$delete(args, options))
}

export async function postVerifiedNumbersPhoneNumberActionsVerify(
  args: InferRequestType<
    (typeof client.verified_numbers)[':phone_number']['actions']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verified_numbers[':phone_number'].actions.verify.$post(args, options),
  )
}

export async function getVerifyProfiles(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.$get(args, options))
}

export async function postVerifyProfiles(
  args: InferRequestType<typeof client.verify_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.$post(args, options))
}

export async function getVerifyProfilesTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.verify_profiles.templates.$get(undefined, options))
}

export async function postVerifyProfilesTemplates(
  args: InferRequestType<typeof client.verify_profiles.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.templates.$post(args, options))
}

export async function patchVerifyProfilesTemplatesTemplateId(
  args: InferRequestType<(typeof client.verify_profiles.templates)[':template_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.templates[':template_id'].$patch(args, options))
}

export async function getVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$get(args, options))
}

export async function deleteVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$delete(args, options))
}

export async function patchVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$patch(args, options))
}

export async function getVirtualCrossConnects(
  args: InferRequestType<typeof client.virtual_cross_connects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects.$get(args, options))
}

export async function postVirtualCrossConnects(
  args: InferRequestType<typeof client.virtual_cross_connects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects.$post(args, options))
}

export async function getVirtualCrossConnectsCoverage(
  args: InferRequestType<typeof client.virtual_cross_connects.coverage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects.coverage.$get(args, options))
}

export async function getVirtualCrossConnectsId(
  args: InferRequestType<(typeof client.virtual_cross_connects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects[':id'].$get(args, options))
}

export async function deleteVirtualCrossConnectsId(
  args: InferRequestType<(typeof client.virtual_cross_connects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects[':id'].$delete(args, options))
}

export async function patchVirtualCrossConnectsId(
  args: InferRequestType<(typeof client.virtual_cross_connects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects[':id'].$patch(args, options))
}

export async function getVirtualCrossConnectsCoverage2(
  args: InferRequestType<typeof client.virtual_cross_connects_coverage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_cross_connects_coverage.$get(args, options))
}

export async function getVoiceClones(
  args: InferRequestType<typeof client.voice_clones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones.$get(args, options))
}

export async function postVoiceClones(
  args: InferRequestType<typeof client.voice_clones.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones.$post(args, options))
}

export async function postVoiceClonesFromUpload(
  args: InferRequestType<typeof client.voice_clones.from_upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones.from_upload.$post(args, options))
}

export async function deleteVoiceClonesId(
  args: InferRequestType<(typeof client.voice_clones)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones[':id'].$delete(args, options))
}

export async function patchVoiceClonesId(
  args: InferRequestType<(typeof client.voice_clones)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones[':id'].$patch(args, options))
}

export async function getVoiceClonesIdSample(
  args: InferRequestType<(typeof client.voice_clones)[':id']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_clones[':id'].sample.$get(args, options))
}

export async function getVoiceDesigns(
  args: InferRequestType<typeof client.voice_designs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs.$get(args, options))
}

export async function postVoiceDesigns(
  args: InferRequestType<typeof client.voice_designs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs.$post(args, options))
}

export async function getVoiceDesignsId(
  args: InferRequestType<(typeof client.voice_designs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs[':id'].$get(args, options))
}

export async function deleteVoiceDesignsId(
  args: InferRequestType<(typeof client.voice_designs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs[':id'].$delete(args, options))
}

export async function patchVoiceDesignsId(
  args: InferRequestType<(typeof client.voice_designs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs[':id'].$patch(args, options))
}

export async function getVoiceDesignsIdSample(
  args: InferRequestType<(typeof client.voice_designs)[':id']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_designs[':id'].sample.$get(args, options))
}

export async function deleteVoiceDesignsIdVersionsVersion(
  args: InferRequestType<(typeof client.voice_designs)[':id']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.voice_designs[':id'].versions[':version'].$delete(args, options),
  )
}

export async function getVoiceSdkCallReports(
  args: InferRequestType<typeof client.voice_sdk_call_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_sdk_call_reports.$get(args, options))
}

export async function getVoiceSdkCallReportsCallId(
  args: InferRequestType<(typeof client.voice_sdk_call_reports)[':call_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice_sdk_call_reports[':call_id'].$get(args, options))
}

export async function postWebSearch(
  args: InferRequestType<typeof client.web_search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_search.$post(args, options))
}

export async function postWebSearchContents(
  args: InferRequestType<typeof client.web_search.contents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_search.contents.$post(args, options))
}

export async function postWebSearchResearch(
  args: InferRequestType<typeof client.web_search.research.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_search.research.$post(args, options))
}

export async function getWebSearchResearchTaskId(
  args: InferRequestType<(typeof client.web_search.research)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_search.research[':task_id'].$get(args, options))
}

export async function getWebhookDeliveries(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_deliveries.$get(args, options))
}

export async function getWebhookDeliveriesId(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_deliveries[':id'].$get(args, options))
}

export async function getWhatsappBusinessAccounts(
  args: InferRequestType<typeof client.whatsapp.business_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.business_accounts.$get(args, options))
}

export async function getWhatsappBusinessAccountsId(
  args: InferRequestType<(typeof client.whatsapp.business_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.business_accounts[':id'].$get(args, options))
}

export async function deleteWhatsappBusinessAccountsId(
  args: InferRequestType<(typeof client.whatsapp.business_accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.business_accounts[':id'].$delete(args, options))
}

export async function getWhatsappBusinessAccountsIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.whatsapp.business_accounts)[':id']['phone_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.business_accounts[':id'].phone_numbers.$get(args, options),
  )
}

export async function postWhatsappBusinessAccountsIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.whatsapp.business_accounts)[':id']['phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.business_accounts[':id'].phone_numbers.$post(args, options),
  )
}

export async function getWhatsappBusinessAccountsIdSettings(
  args: InferRequestType<(typeof client.whatsapp.business_accounts)[':id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.business_accounts[':id'].settings.$get(args, options))
}

export async function patchWhatsappBusinessAccountsIdSettings(
  args: InferRequestType<(typeof client.whatsapp.business_accounts)[':id']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.business_accounts[':id'].settings.$patch(args, options),
  )
}

export async function getWhatsappHostedSignups(
  args: InferRequestType<typeof client.whatsapp.hosted_signups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.hosted_signups.$get(args, options))
}

export async function postWhatsappHostedSignups(
  args: InferRequestType<typeof client.whatsapp.hosted_signups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.hosted_signups.$post(args, options))
}

export async function getWhatsappHostedSignupsId(
  args: InferRequestType<(typeof client.whatsapp.hosted_signups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.hosted_signups[':id'].$get(args, options))
}

export async function getWhatsappMessageTemplates(
  args: InferRequestType<typeof client.whatsapp.message_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.message_templates.$get(args, options))
}

export async function postWhatsappMessageTemplates(
  args: InferRequestType<typeof client.whatsapp.message_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.message_templates.$post(args, options))
}

export async function getWhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.whatsapp.message_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.message_templates[':id'].$get(args, options))
}

export async function deleteWhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.whatsapp.message_templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.message_templates[':id'].$delete(args, options))
}

export async function patchWhatsappMessageTemplatesId(
  args: InferRequestType<(typeof client.whatsapp.message_templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.message_templates[':id'].$patch(args, options))
}

export async function getWhatsappPhoneNumbers(
  args: InferRequestType<typeof client.whatsapp.phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.phone_numbers.$get(args, options))
}

export async function getWhatsappPhoneNumbersIdCallingRouting(
  args: InferRequestType<(typeof client.whatsapp.phone_numbers)[':id']['calling_routing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':id'].calling_routing.$get(args, options),
  )
}

export async function patchWhatsappPhoneNumbersIdCallingRouting(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':id']['calling_routing']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':id'].calling_routing.$patch(args, options),
  )
}

export async function getWhatsappPhoneNumbersPhoneNumber(
  args: InferRequestType<(typeof client.whatsapp.phone_numbers)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.phone_numbers[':phone_number'].$get(args, options))
}

export async function deleteWhatsappPhoneNumbersPhoneNumber(
  args: InferRequestType<(typeof client.whatsapp.phone_numbers)[':phone_number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.phone_numbers[':phone_number'].$delete(args, options))
}

export async function getWhatsappPhoneNumbersPhoneNumberCallingSettings(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['calling_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].calling_settings.$get(args, options),
  )
}

export async function patchWhatsappPhoneNumbersPhoneNumberCallingSettings(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['calling_settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].calling_settings.$patch(args, options),
  )
}

export async function getWhatsappPhoneNumbersPhoneNumberConversationWindow(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['conversation_window']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].conversation_window.$get(args, options),
  )
}

export async function getWhatsappPhoneNumbersPhoneNumberConversationalComponents(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['conversational_components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].conversational_components.$get(args, options),
  )
}

export async function patchWhatsappPhoneNumbersPhoneNumberConversationalComponents(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['conversational_components']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].conversational_components.$patch(args, options),
  )
}

export async function getWhatsappPhoneNumbersPhoneNumberProfile(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['profile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].profile.$get(args, options),
  )
}

export async function patchWhatsappPhoneNumbersPhoneNumberProfile(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['profile']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].profile.$patch(args, options),
  )
}

export async function getWhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].profile.photo.$get(args, options),
  )
}

export async function postWhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].profile.photo.$post(args, options),
  )
}

export async function deleteWhatsappPhoneNumbersPhoneNumberProfilePhoto(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['profile']['photo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].profile.photo.$delete(args, options),
  )
}

export async function postWhatsappPhoneNumbersPhoneNumberResendVerification(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['resend_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].resend_verification.$post(args, options),
  )
}

export async function postWhatsappPhoneNumbersPhoneNumberVerify(
  args: InferRequestType<
    (typeof client.whatsapp.phone_numbers)[':phone_number']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp.phone_numbers[':phone_number'].verify.$post(args, options),
  )
}

export async function getWhatsappSignup(
  args: InferRequestType<typeof client.whatsapp.signup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.signup.$get(args, options))
}

export async function getWhatsappSignupIdStatus(
  args: InferRequestType<(typeof client.whatsapp.signup)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.signup[':id'].status.$get(args, options))
}

export async function getWireguardInterfaces(
  args: InferRequestType<typeof client.wireguard_interfaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_interfaces.$get(args, options))
}

export async function postWireguardInterfaces(
  args: InferRequestType<typeof client.wireguard_interfaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_interfaces.$post(args, options))
}

export async function getWireguardInterfacesId(
  args: InferRequestType<(typeof client.wireguard_interfaces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_interfaces[':id'].$get(args, options))
}

export async function deleteWireguardInterfacesId(
  args: InferRequestType<(typeof client.wireguard_interfaces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_interfaces[':id'].$delete(args, options))
}

export async function getWireguardPeers(
  args: InferRequestType<typeof client.wireguard_peers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers.$get(args, options))
}

export async function postWireguardPeers(
  args: InferRequestType<typeof client.wireguard_peers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers.$post(args, options))
}

export async function getWireguardPeersId(
  args: InferRequestType<(typeof client.wireguard_peers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers[':id'].$get(args, options))
}

export async function deleteWireguardPeersId(
  args: InferRequestType<(typeof client.wireguard_peers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers[':id'].$delete(args, options))
}

export async function patchWireguardPeersId(
  args: InferRequestType<(typeof client.wireguard_peers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers[':id'].$patch(args, options))
}

export async function getWireguardPeersIdConfig(
  args: InferRequestType<(typeof client.wireguard_peers)[':id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireguard_peers[':id'].config.$get(args, options))
}

export async function getWirelessDetailRecordsReports(
  args: InferRequestType<typeof client.wireless.detail.records.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail.records.reports.$get(args, options))
}

export async function postWirelessDetailRecordsReports(
  args: InferRequestType<typeof client.wireless.detail.records.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail.records.reports.$post(args, options))
}

export async function getWirelessDetailRecordsReportsId(
  args: InferRequestType<(typeof client.wireless.detail.records.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail.records.reports[':id'].$get(args, options))
}

export async function deleteWirelessDetailRecordsReportsId(
  args: InferRequestType<(typeof client.wireless.detail.records.reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail.records.reports[':id'].$delete(args, options))
}

export async function getWirelessDetailRecordsReports2(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports.$get(args, options))
}

export async function postWirelessDetailRecordsReports2(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports.$post(args, options))
}

export async function getWirelessDetailRecordsReportsId2(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports[':id'].$get(args, options))
}

export async function deleteWirelessDetailRecordsReportsId2(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports[':id'].$delete(args, options))
}

export async function getWirelessRegions(
  args: InferRequestType<typeof client.wireless.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.regions.$get(args, options))
}

export async function getWirelessBlocklistValues(
  args: InferRequestType<typeof client.wireless_blocklist_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklist_values.$get(args, options))
}

export async function getWirelessBlocklists(
  args: InferRequestType<typeof client.wireless_blocklists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklists.$get(args, options))
}

export async function postWirelessBlocklists(
  args: InferRequestType<typeof client.wireless_blocklists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklists.$post(args, options))
}

export async function getWirelessBlocklistsId(
  args: InferRequestType<(typeof client.wireless_blocklists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklists[':id'].$get(args, options))
}

export async function deleteWirelessBlocklistsId(
  args: InferRequestType<(typeof client.wireless_blocklists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklists[':id'].$delete(args, options))
}

export async function patchWirelessBlocklistsId(
  args: InferRequestType<(typeof client.wireless_blocklists)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless_blocklists[':id'].$patch(args, options))
}

export async function postX402CreditAccount(
  args: InferRequestType<typeof client.x402.credit_account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.x402.credit_account.$post(args, options))
}

export async function getX402CreditAccountPayments(
  args: InferRequestType<typeof client.x402.credit_account.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.x402.credit_account.payments.$get(args, options))
}

export async function getX402CreditAccountPaymentsId(
  args: InferRequestType<(typeof client.x402.credit_account.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.x402.credit_account.payments[':id'].$get(args, options))
}

export async function postX402CreditAccountQuote(
  args: InferRequestType<typeof client.x402.credit_account.quote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.x402.credit_account.quote.$post(args, options))
}
