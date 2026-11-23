import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putInstanceInstanceIdApprovedOrigin(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['approved-origin'].$put(args, options))
}

export async function putInstanceInstanceIdBot(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].bot.$put(args, options))
}

export async function postInstanceInstanceIdBot(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].bot.$post(args, options))
}

export async function putDefaultVocabularyInstanceIdLanguageCode(
  args: InferRequestType<
    (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['default-vocabulary'][':InstanceId'][':LanguageCode'].$put(args, options),
  )
}

export async function putInstanceInstanceIdStorageConfig(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['storage-config'].$put(args, options))
}

export async function putInstanceInstanceIdLambdaFunction(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['lambda-function'].$put(args, options))
}

export async function putInstanceInstanceIdLexBot(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['lex-bot'].$put(args, options))
}

export async function putPhoneNumberPhoneNumberIdContactFlow(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['phone-number'][':PhoneNumberId']['contact-flow'].$put(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdAssociateQuickConnects(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['associate-quick-connects'].$post(args, options),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueues(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues'].$post(
      args,
      options,
    ),
  )
}

export async function putInstanceInstanceIdSecurityKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['security-key'].$put(args, options))
}

export async function postPhoneNumberClaim(
  args: InferRequestType<(typeof client)['phone-number']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'].claim.$post(args, options))
}

export async function getAgentStatusInstanceId(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['agent-status'][':InstanceId'].$get(args, options))
}

export async function putAgentStatusInstanceId(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['agent-status'][':InstanceId'].$put(args, options))
}

export async function putContactFlowsInstanceId(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-flows'][':InstanceId'].$put(args, options))
}

export async function putContactFlowModulesInstanceId(
  args: InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-flow-modules'][':InstanceId'].$put(args, options))
}

export async function putHoursOfOperationsInstanceId(
  args: InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hours-of-operations'][':InstanceId'].$put(args, options))
}

export async function getInstance(
  args: InferRequestType<typeof client.instance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.$get(args, options))
}

export async function putInstance(
  args: InferRequestType<typeof client.instance.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.$put(args, options))
}

export async function getInstanceInstanceIdIntegrationAssociations(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'].$get(args, options),
  )
}

export async function putInstanceInstanceIdIntegrationAssociations(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'].$put(args, options),
  )
}

export async function postContactCreateParticipant(
  args: InferRequestType<(typeof client.contact)['create-participant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['create-participant'].$post(args, options))
}

export async function putQueuesInstanceId(
  args: InferRequestType<(typeof client.queues)[':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':InstanceId'].$put(args, options))
}

export async function getQuickConnectsInstanceId(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quick-connects'][':InstanceId'].$get(args, options))
}

export async function putQuickConnectsInstanceId(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quick-connects'][':InstanceId'].$put(args, options))
}

export async function putRoutingProfilesInstanceId(
  args: InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['routing-profiles'][':InstanceId'].$put(args, options))
}

export async function getRulesInstanceId(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':InstanceId'].$get(args, options))
}

export async function postRulesInstanceId(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':InstanceId'].$post(args, options))
}

export async function putSecurityProfilesInstanceId(
  args: InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-profiles'][':InstanceId'].$put(args, options))
}

export async function getInstanceInstanceIdTaskTemplate(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].task.template.$get(args, options))
}

export async function putInstanceInstanceIdTaskTemplate(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].task.template.$put(args, options))
}

export async function putTrafficDistributionGroup(
  args: InferRequestType<(typeof client)['traffic-distribution-group']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-distribution-group'].$put(args, options))
}

export async function getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
      'use-cases'
    ].$get(args, options),
  )
}

export async function putInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
      'use-cases'
    ].$put(args, options),
  )
}

export async function putUsersInstanceId(
  args: InferRequestType<(typeof client.users)[':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'].$put(args, options))
}

export async function putUserHierarchyGroupsInstanceId(
  args: InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-hierarchy-groups'][':InstanceId'].$put(args, options))
}

export async function postVocabularyInstanceId(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vocabulary[':InstanceId'].$post(args, options))
}

export async function getContactFlowsInstanceIdContactFlowId(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flows'][':InstanceId'][':ContactFlowId'].$get(args, options),
  )
}

export async function deleteContactFlowsInstanceIdContactFlowId(
  args: InferRequestType<
    (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flows'][':InstanceId'][':ContactFlowId'].$delete(args, options),
  )
}

export async function getContactFlowModulesInstanceIdContactFlowModuleId(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$get(args, options),
  )
}

export async function deleteContactFlowModulesInstanceIdContactFlowModuleId(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$delete(args, options),
  )
}

export async function getHoursOfOperationsInstanceIdHoursOfOperationId(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$get(args, options),
  )
}

export async function postHoursOfOperationsInstanceIdHoursOfOperationId(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$post(args, options),
  )
}

export async function deleteHoursOfOperationsInstanceIdHoursOfOperationId(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$delete(args, options),
  )
}

export async function getInstanceInstanceId(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].$get(args, options))
}

export async function deleteInstanceInstanceId(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].$delete(args, options))
}

export async function deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getQuickConnectsInstanceIdQuickConnectId(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['quick-connects'][':InstanceId'][':QuickConnectId'].$get(args, options),
  )
}

export async function deleteQuickConnectsInstanceIdQuickConnectId(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['quick-connects'][':InstanceId'][':QuickConnectId'].$delete(args, options),
  )
}

export async function getRulesInstanceIdRuleId(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':InstanceId'][':RuleId'].$get(args, options))
}

export async function putRulesInstanceIdRuleId(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':InstanceId'][':RuleId'].$put(args, options))
}

export async function deleteRulesInstanceIdRuleId(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':InstanceId'][':RuleId'].$delete(args, options))
}

export async function getSecurityProfilesInstanceIdSecurityProfileId(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':InstanceId'][':SecurityProfileId'].$get(args, options),
  )
}

export async function postSecurityProfilesInstanceIdSecurityProfileId(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':InstanceId'][':SecurityProfileId'].$post(args, options),
  )
}

export async function deleteSecurityProfilesInstanceIdSecurityProfileId(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':InstanceId'][':SecurityProfileId'].$delete(args, options),
  )
}

export async function getInstanceInstanceIdTaskTemplateTaskTemplateId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId'].task.template[':TaskTemplateId'].$get(args, options),
  )
}

export async function postInstanceInstanceIdTaskTemplateTaskTemplateId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId'].task.template[':TaskTemplateId'].$post(args, options),
  )
}

export async function deleteInstanceInstanceIdTaskTemplateTaskTemplateId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId'].task.template[':TaskTemplateId'].$delete(args, options),
  )
}

export async function getTrafficDistributionGroupTrafficDistributionGroupId(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['traffic-distribution-group'][':TrafficDistributionGroupId'].$get(args, options),
  )
}

export async function deleteTrafficDistributionGroupTrafficDistributionGroupId(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['traffic-distribution-group'][':TrafficDistributionGroupId'].$delete(args, options),
  )
}

export async function deleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
      'use-cases'
    ][':UseCaseId'].$delete(args, options),
  )
}

export async function getUsersInstanceIdUserId(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'][':UserId'].$get(args, options))
}

export async function deleteUsersInstanceIdUserId(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'][':UserId'].$delete(args, options))
}

export async function getUserHierarchyGroupsInstanceIdHierarchyGroupId(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$get(args, options),
  )
}

export async function deleteUserHierarchyGroupsInstanceIdHierarchyGroupId(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$delete(args, options),
  )
}

export async function postVocabularyRemoveInstanceIdVocabularyId(
  args: InferRequestType<
    (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['vocabulary-remove'][':InstanceId'][':VocabularyId'].$post(args, options),
  )
}

export async function getAgentStatusInstanceIdAgentStatusId(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['agent-status'][':InstanceId'][':AgentStatusId'].$get(args, options),
  )
}

export async function postAgentStatusInstanceIdAgentStatusId(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['agent-status'][':InstanceId'][':AgentStatusId'].$post(args, options),
  )
}

export async function getContactsInstanceIdContactId(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':InstanceId'][':ContactId'].$get(args, options))
}

export async function postContactsInstanceIdContactId(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':InstanceId'][':ContactId'].$post(args, options))
}

export async function getInstanceInstanceIdAttributeAttributeType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId'].attribute[':AttributeType'].$get(args, options),
  )
}

export async function postInstanceInstanceIdAttributeAttributeType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId'].attribute[':AttributeType'].$post(args, options),
  )
}

export async function getInstanceInstanceIdStorageConfigAssociationIdResourceType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$get(
      args,
      options,
    ),
  )
}

export async function postInstanceInstanceIdStorageConfigAssociationIdResourceType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$post(
      args,
      options,
    ),
  )
}

export async function deleteInstanceInstanceIdStorageConfigAssociationIdResourceType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$delete(
      args,
      options,
    ),
  )
}

export async function getPhoneNumberPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':PhoneNumberId'].$get(args, options))
}

export async function putPhoneNumberPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':PhoneNumberId'].$put(args, options))
}

export async function deletePhoneNumberPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'][':PhoneNumberId'].$delete(args, options))
}

export async function getQueuesInstanceIdQueueId(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':InstanceId'][':QueueId'].$get(args, options))
}

export async function getRoutingProfilesInstanceIdRoutingProfileId(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId'].$get(args, options),
  )
}

export async function getUserHierarchyStructureInstanceId(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-hierarchy-structure'][':InstanceId'].$get(args, options))
}

export async function postUserHierarchyStructureInstanceId(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-hierarchy-structure'][':InstanceId'].$post(args, options))
}

export async function getVocabularyInstanceIdVocabularyId(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vocabulary[':InstanceId'][':VocabularyId'].$get(args, options))
}

export async function deleteInstanceInstanceIdApprovedOriginOrigin(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['approved-origin#origin'].$delete(args, options),
  )
}

export async function deleteInstanceInstanceIdLambdaFunctionFunctionArn(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['lambda-function#functionArn'].$delete(args, options),
  )
}

export async function deleteInstanceInstanceIdLexBotBotNameLexRegion(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['lex-bot#botName&lexRegion'].$delete(args, options),
  )
}

export async function deletePhoneNumberPhoneNumberIdContactFlowInstanceId(
  args: InferRequestType<
    (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['phone-number'][':PhoneNumberId']['contact-flow#instanceId'].$delete(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdDisassociateQuickConnects(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['disassociate-quick-connects'].$post(args, options),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueues(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues'].$post(
      args,
      options,
    ),
  )
}

export async function deleteInstanceInstanceIdSecurityKeyAssociationId(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['security-key'][':AssociationId'].$delete(args, options),
  )
}

export async function postUsersInstanceIdUserIdContact(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'][':UserId'].contact.$post(args, options))
}

export async function getContactAttributesInstanceIdInitialContactId(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contact.attributes[':InstanceId'][':InitialContactId'].$get(args, options),
  )
}

export async function postMetricsCurrentInstanceId(
  args: InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.current[':InstanceId'].$post(args, options))
}

export async function postMetricsUserdataInstanceId(
  args: InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.userdata[':InstanceId'].$post(args, options))
}

export async function getUserFederateInstanceId(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.federate[':InstanceId'].$get(args, options))
}

export async function postMetricsHistoricalInstanceId(
  args: InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.historical[':InstanceId'].$post(args, options))
}

export async function postMetricsData(
  args: InferRequestType<typeof client.metrics.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.data.$post(args, options))
}

export async function getTrafficDistributionId(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-distribution'][':Id'].$get(args, options))
}

export async function putTrafficDistributionId(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-distribution'][':Id'].$put(args, options))
}

export async function getInstanceInstanceIdApprovedOrigins(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['approved-origins'].$get(args, options))
}

export async function getInstanceInstanceIdBotsLexVersion(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['bots#lexVersion'].$get(args, options))
}

export async function getContactFlowModulesSummaryInstanceId(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flow-modules-summary'][':InstanceId'].$get(args, options),
  )
}

export async function getContactFlowsSummaryInstanceId(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-flows-summary'][':InstanceId'].$get(args, options))
}

export async function getContactReferencesInstanceIdContactIdReferenceTypes(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contact.references[':InstanceId'][':ContactId#referenceTypes'].$get(args, options),
  )
}

export async function postDefaultVocabularySummaryInstanceId(
  args: InferRequestType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['default-vocabulary-summary'][':InstanceId'].$post(args, options),
  )
}

export async function getHoursOfOperationsSummaryInstanceId(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['hours-of-operations-summary'][':InstanceId'].$get(args, options),
  )
}

export async function getInstanceInstanceIdAttributes(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].attributes.$get(args, options))
}

export async function getInstanceInstanceIdStorageConfigsResourceType(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instance[':InstanceId']['storage-configs#resourceType'].$get(args, options),
  )
}

export async function getInstanceInstanceIdLambdaFunctions(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['lambda-functions'].$get(args, options))
}

export async function getInstanceInstanceIdLexBots(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['lex-bots'].$get(args, options))
}

export async function getPhoneNumbersSummaryInstanceId(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers-summary'][':InstanceId'].$get(args, options))
}

export async function postPhoneNumberList(
  args: InferRequestType<(typeof client)['phone-number']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number'].list.$post(args, options))
}

export async function getPromptsSummaryInstanceId(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['prompts-summary'][':InstanceId'].$get(args, options))
}

export async function getQueuesInstanceIdQueueIdQuickConnects(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['quick-connects'].$get(args, options),
  )
}

export async function getQueuesSummaryInstanceId(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['queues-summary'][':InstanceId'].$get(args, options))
}

export async function getRoutingProfilesInstanceIdRoutingProfileIdQueues(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$get(args, options),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdQueues(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$post(args, options),
  )
}

export async function getRoutingProfilesSummaryInstanceId(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['routing-profiles-summary'][':InstanceId'].$get(args, options))
}

export async function getInstanceInstanceIdSecurityKeys(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId']['security-keys'].$get(args, options))
}

export async function getSecurityProfilesPermissionsInstanceIdSecurityProfileId(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles-permissions'][':InstanceId'][':SecurityProfileId'].$get(
      args,
      options,
    ),
  )
}

export async function getSecurityProfilesSummaryInstanceId(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-profiles-summary'][':InstanceId'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function getTrafficDistributionGroups(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['traffic-distribution-groups'].$get(args, options))
}

export async function getUserHierarchyGroupsSummaryInstanceId(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['user-hierarchy-groups-summary'][':InstanceId'].$get(args, options),
  )
}

export async function getUsersSummaryInstanceId(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users-summary'][':InstanceId'].$get(args, options))
}

export async function postContactMonitor(
  args: InferRequestType<typeof client.contact.monitor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.monitor.$post(args, options))
}

export async function putUsersInstanceIdUserIdStatus(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'][':UserId'].status.$put(args, options))
}

export async function postInstanceInstanceIdReplicate(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':InstanceId'].replicate.$post(args, options))
}

export async function postContactResumeRecording(
  args: InferRequestType<(typeof client.contact)['resume-recording']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['resume-recording'].$post(args, options))
}

export async function postPhoneNumberSearchAvailable(
  args: InferRequestType<(typeof client)['phone-number']['search-available']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number']['search-available'].$post(args, options))
}

export async function postSearchQueues(
  args: InferRequestType<(typeof client)['search-queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search-queues'].$post(args, options))
}

export async function postSearchRoutingProfiles(
  args: InferRequestType<(typeof client)['search-routing-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search-routing-profiles'].$post(args, options))
}

export async function postSearchSecurityProfiles(
  args: InferRequestType<(typeof client)['search-security-profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search-security-profiles'].$post(args, options))
}

export async function postSearchUsers(
  args: InferRequestType<(typeof client)['search-users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search-users'].$post(args, options))
}

export async function postVocabularySummaryInstanceId(
  args: InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vocabulary-summary'][':InstanceId'].$post(args, options))
}

export async function putContactChat(
  args: InferRequestType<typeof client.contact.chat.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.chat.$put(args, options))
}

export async function postContactStartRecording(
  args: InferRequestType<(typeof client.contact)['start-recording']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['start-recording'].$post(args, options))
}

export async function postContactStartStreaming(
  args: InferRequestType<(typeof client.contact)['start-streaming']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['start-streaming'].$post(args, options))
}

export async function putContactOutboundVoice(
  args: InferRequestType<(typeof client.contact)['outbound-voice']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['outbound-voice'].$put(args, options))
}

export async function putContactTask(
  args: InferRequestType<typeof client.contact.task.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.task.$put(args, options))
}

export async function postContactStop(
  args: InferRequestType<typeof client.contact.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.stop.$post(args, options))
}

export async function postContactStopRecording(
  args: InferRequestType<(typeof client.contact)['stop-recording']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['stop-recording'].$post(args, options))
}

export async function postContactStopStreaming(
  args: InferRequestType<(typeof client.contact)['stop-streaming']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['stop-streaming'].$post(args, options))
}

export async function postContactSuspendRecording(
  args: InferRequestType<(typeof client.contact)['suspend-recording']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact['suspend-recording'].$post(args, options))
}

export async function postContactTransfer(
  args: InferRequestType<typeof client.contact.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.transfer.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postContactAttributes(
  args: InferRequestType<typeof client.contact.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.attributes.$post(args, options))
}

export async function postContactFlowsInstanceIdContactFlowIdContent(
  args: InferRequestType<
    (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flows'][':InstanceId'][':ContactFlowId'].content.$post(args, options),
  )
}

export async function postContactFlowsInstanceIdContactFlowIdMetadata(
  args: InferRequestType<
    (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flows'][':InstanceId'][':ContactFlowId'].metadata.$post(args, options),
  )
}

export async function postContactFlowModulesInstanceIdContactFlowModuleIdContent(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].content.$post(
      args,
      options,
    ),
  )
}

export async function postContactFlowModulesInstanceIdContactFlowModuleIdMetadata(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].metadata.$post(
      args,
      options,
    ),
  )
}

export async function postContactFlowsInstanceIdContactFlowIdName(
  args: InferRequestType<
    (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['contact-flows'][':InstanceId'][':ContactFlowId'].name.$post(args, options),
  )
}

export async function postContactSchedule(
  args: InferRequestType<typeof client.contact.schedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.schedule.$post(args, options))
}

export async function putContactParticipantRoleConfigInstanceIdContactId(
  args: InferRequestType<
    (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contact['participant-role-config'][':InstanceId'][':ContactId'].$put(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdHoursOfOperation(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['hours-of-operation'].$post(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdMaxContacts(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['max-contacts'].$post(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdName(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':InstanceId'][':QueueId'].name.$post(args, options))
}

export async function postQueuesInstanceIdQueueIdOutboundCallerConfig(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':InstanceId'][':QueueId']['outbound-caller-config'].$post(args, options),
  )
}

export async function postQueuesInstanceIdQueueIdStatus(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':InstanceId'][':QueueId'].status.$post(args, options))
}

export async function postQuickConnectsInstanceIdQuickConnectIdConfig(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['quick-connects'][':InstanceId'][':QuickConnectId'].config.$post(args, options),
  )
}

export async function postQuickConnectsInstanceIdQuickConnectIdName(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['quick-connects'][':InstanceId'][':QuickConnectId'].name.$post(args, options),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdConcurrency(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId'].concurrency.$post(args, options),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueue(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue'].$post(
      args,
      options,
    ),
  )
}

export async function postRoutingProfilesInstanceIdRoutingProfileIdName(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['routing-profiles'][':InstanceId'][':RoutingProfileId'].name.$post(args, options),
  )
}

export async function postUsersInstanceIdUserIdHierarchy(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':InstanceId'][':UserId'].hierarchy.$post(args, options))
}

export async function postUserHierarchyGroupsInstanceIdHierarchyGroupIdName(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].name.$post(args, options),
  )
}

export async function postUsersInstanceIdUserIdIdentityInfo(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':InstanceId'][':UserId']['identity-info'].$post(args, options),
  )
}

export async function postUsersInstanceIdUserIdPhoneConfig(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':InstanceId'][':UserId']['phone-config'].$post(args, options),
  )
}

export async function postUsersInstanceIdUserIdRoutingProfile(
  args: InferRequestType<
    (typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':InstanceId'][':UserId']['routing-profile'].$post(args, options),
  )
}

export async function postUsersInstanceIdUserIdSecurityProfiles(
  args: InferRequestType<
    (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':InstanceId'][':UserId']['security-profiles'].$post(args, options),
  )
}
