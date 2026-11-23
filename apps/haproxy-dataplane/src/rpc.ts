import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getServiceDiscoveryAws(options?: ClientRequestOptions) {
  return await parseResponse(client.service_discovery.aws.$get(undefined, options))
}

export async function postServiceDiscoveryAws(
  args: InferRequestType<typeof client.service_discovery.aws.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.aws.$post(args, options))
}

export async function getServiceDiscoveryAwsId(
  args: InferRequestType<(typeof client.service_discovery.aws)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.aws[':id'].$get(args, options))
}

export async function putServiceDiscoveryAwsId(
  args: InferRequestType<(typeof client.service_discovery.aws)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.aws[':id'].$put(args, options))
}

export async function deleteServiceDiscoveryAwsId(
  args: InferRequestType<(typeof client.service_discovery.aws)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.aws[':id'].$delete(args, options))
}

export async function getServiceDiscoveryConsul(options?: ClientRequestOptions) {
  return await parseResponse(client.service_discovery.consul.$get(undefined, options))
}

export async function postServiceDiscoveryConsul(
  args: InferRequestType<typeof client.service_discovery.consul.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.consul.$post(args, options))
}

export async function getServiceDiscoveryConsulId(
  args: InferRequestType<(typeof client.service_discovery.consul)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.consul[':id'].$get(args, options))
}

export async function putServiceDiscoveryConsulId(
  args: InferRequestType<(typeof client.service_discovery.consul)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.consul[':id'].$put(args, options))
}

export async function deleteServiceDiscoveryConsulId(
  args: InferRequestType<(typeof client.service_discovery.consul)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_discovery.consul[':id'].$delete(args, options))
}

export async function getServices(options?: ClientRequestOptions) {
  return await parseResponse(client.services.$get(undefined, options))
}

export async function getServicesHaproxy(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.$get(undefined, options))
}

export async function getServicesHaproxyConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.configuration.$get(undefined, options))
}

export async function getServicesHaproxyConfigurationAcme(
  args: InferRequestType<typeof client.services.haproxy.configuration.acme.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.acme.$get(args, options))
}

export async function postServicesHaproxyConfigurationAcme(
  args: InferRequestType<typeof client.services.haproxy.configuration.acme.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.acme.$post(args, options))
}

export async function getServicesHaproxyConfigurationAcmeName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.acme)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.acme[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationAcmeName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.acme)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.acme[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationAcmeName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.acme)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.acme[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackends(
  args: InferRequestType<typeof client.services.haproxy.configuration.backends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.backends.$get(args, options))
}

export async function postServicesHaproxyConfigurationBackends(
  args: InferRequestType<typeof client.services.haproxy.configuration.backends.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.backends.$post(args, options))
}

export async function getServicesHaproxyConfigurationBackendsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.backends)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.backends)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['acls'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].acls[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameFilters(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameFilters(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['filters'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].filters[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_after_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_after_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_checks[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_error_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_error_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['http_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].http_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['log_targets'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].log_targets[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameServerSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_switching_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_switching_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServerTemplates(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_templates.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameServerTemplates(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_templates.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefix(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_templates'][':prefix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_templates[':prefix'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefix(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_templates'][':prefix']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_templates[':prefix'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefix(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['server_templates'][':prefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].server_templates[
      ':prefix'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].servers.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['servers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].servers.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['servers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].servers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['servers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].servers[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['servers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].servers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameStickRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameStickRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameStickRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameStickRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameStickRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameStickRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['stick_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].stick_rules[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_checks[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationBackendsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.backends)[':parent_name']['tcp_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.backends[':parent_name'].tcp_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationCaches(
  args: InferRequestType<typeof client.services.haproxy.configuration.caches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.caches.$get(args, options))
}

export async function postServicesHaproxyConfigurationCaches(
  args: InferRequestType<typeof client.services.haproxy.configuration.caches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.caches.$post(args, options))
}

export async function getServicesHaproxyConfigurationCachesName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.caches)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.caches[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationCachesName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.caches)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.caches[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationCachesName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.caches)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.caches[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationCrtStores(
  args: InferRequestType<typeof client.services.haproxy.configuration.crt_stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.crt_stores.$get(args, options))
}

export async function postServicesHaproxyConfigurationCrtStores(
  args: InferRequestType<typeof client.services.haproxy.configuration.crt_stores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.crt_stores.$post(args, options))
}

export async function getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoads(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':crt_store']['crt_loads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':crt_store'].crt_loads.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoads(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':crt_store']['crt_loads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':crt_store'].crt_loads.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificate(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':crt_store']['crt_loads'][':certificate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':crt_store'].crt_loads[':certificate'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificate(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':crt_store']['crt_loads'][':certificate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':crt_store'].crt_loads[':certificate'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificate(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':crt_store']['crt_loads'][':certificate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':crt_store'].crt_loads[
      ':certificate'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationCrtStoresName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationCrtStoresName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationCrtStoresName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.crt_stores)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.crt_stores[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaults(
  args: InferRequestType<typeof client.services.haproxy.configuration.defaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.defaults.$get(args, options))
}

export async function putServicesHaproxyConfigurationDefaults(
  args: InferRequestType<typeof client.services.haproxy.configuration.defaults.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.defaults.$put(args, options))
}

export async function postServicesHaproxyConfigurationDefaults(
  args: InferRequestType<typeof client.services.haproxy.configuration.defaults.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.defaults.$post(args, options))
}

export async function getServicesHaproxyConfigurationDefaultsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.defaults)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.defaults)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['acls'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].acls[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_after_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_after_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_checks[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_error_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_error_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['http_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].http_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['log_targets'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].log_targets[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['quic_initial_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].quic_initial_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_checks[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationDefaultsParentNameTcpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.defaults)[':parent_name']['tcp_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.defaults[':parent_name'].tcp_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFcgiApps(
  args: InferRequestType<typeof client.services.haproxy.configuration.fcgi_apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.fcgi_apps.$get(args, options))
}

export async function postServicesHaproxyConfigurationFcgiApps(
  args: InferRequestType<typeof client.services.haproxy.configuration.fcgi_apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.fcgi_apps.$post(args, options))
}

export async function getServicesHaproxyConfigurationFcgiAppsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.fcgi_apps)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFcgiAppsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.fcgi_apps)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFcgiAppsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFcgiAppsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFcgiAppsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationFcgiAppsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFcgiAppsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFcgiAppsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFcgiAppsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.fcgi_apps)[':parent_name']['acls'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.fcgi_apps[':parent_name'].acls[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontends(
  args: InferRequestType<typeof client.services.haproxy.configuration.frontends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.frontends.$get(args, options))
}

export async function postServicesHaproxyConfigurationFrontends(
  args: InferRequestType<typeof client.services.haproxy.configuration.frontends.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.frontends.$post(args, options))
}

export async function getServicesHaproxyConfigurationFrontendsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.frontends)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.frontends)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameAcls(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameAclsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['acls'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].acls[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameBackendSwitchingRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['backend_switching_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].backend_switching_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['binds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].binds.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['binds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].binds.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['binds'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].binds[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['binds'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].binds[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['binds'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].binds[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameCaptures(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameCaptures(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameCapturesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameCapturesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameCapturesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameCapturesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['captures'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].captures[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameFilters(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameFilters(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameFiltersIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['filters'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].filters[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitches(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['force_be_switches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].force_be_switches.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameForceBeSwitches(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['force_be_switches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].force_be_switches.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['force_be_switches'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].force_be_switches[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['force_be_switches'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].force_be_switches[
      ':index'
    ].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameForceBeSwitchesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['force_be_switches'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].force_be_switches[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameHttpAfterResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_after_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_after_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameHttpErrorRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_error_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_error_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameHttpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameHttpResponseRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['http_response_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].http_response_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['log_targets'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].log_targets[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameQuicInitialRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['quic_initial_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].quic_initial_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameSslFrontUses(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['ssl_front_uses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].ssl_front_uses.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameSslFrontUses(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['ssl_front_uses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].ssl_front_uses.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['ssl_front_uses'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].ssl_front_uses[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['ssl_front_uses'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].ssl_front_uses[':index'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameSslFrontUsesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['ssl_front_uses'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].ssl_front_uses[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRules(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules[
      ':index'
    ].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules[
      ':index'
    ].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules[
      ':index'
    ].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationFrontendsParentNameTcpRequestRulesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.frontends)[':parent_name']['tcp_request_rules'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.frontends[':parent_name'].tcp_request_rules[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationGlobal(
  args: InferRequestType<typeof client.services.haproxy.configuration.global.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.global.$get(args, options))
}

export async function putServicesHaproxyConfigurationGlobal(
  args: InferRequestType<typeof client.services.haproxy.configuration.global.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.global.$put(args, options))
}

export async function getServicesHaproxyConfigurationGlobalLogTargets(
  args: InferRequestType<typeof client.services.haproxy.configuration.global.log_targets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationGlobalLogTargets(
  args: InferRequestType<typeof client.services.haproxy.configuration.global.log_targets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationGlobalLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.global.log_targets)[':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets[':index'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationGlobalLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.global.log_targets)[':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets[':index'].$put(args, options),
  )
}

export async function postServicesHaproxyConfigurationGlobalLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.global.log_targets)[':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets[':index'].$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationGlobalLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.global.log_targets)[':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.global.log_targets[':index'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationGroups(
  args: InferRequestType<typeof client.services.haproxy.configuration.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.groups.$get(args, options))
}

export async function postServicesHaproxyConfigurationGroups(
  args: InferRequestType<typeof client.services.haproxy.configuration.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.groups.$post(args, options))
}

export async function getServicesHaproxyConfigurationGroupsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.groups)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.groups[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationGroupsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.groups)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.groups[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationGroupsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.groups)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.groups[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationHealthchecks(
  args: InferRequestType<typeof client.services.haproxy.configuration.healthchecks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.healthchecks.$get(args, options))
}

export async function postServicesHaproxyConfigurationHealthchecks(
  args: InferRequestType<typeof client.services.haproxy.configuration.healthchecks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationHealthchecksName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationHealthchecksName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationHealthchecksName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationHealthchecksParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationHealthchecksParentNameHttpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['http_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].http_checks[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationHealthchecksParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationHealthchecksParentNameTcpChecks(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.healthchecks)[':parent_name']['tcp_checks'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.healthchecks[':parent_name'].tcp_checks[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationHttpErrorsSections(
  args: InferRequestType<typeof client.services.haproxy.configuration.http_errors_sections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.http_errors_sections.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationHttpErrorsSections(
  args: InferRequestType<typeof client.services.haproxy.configuration.http_errors_sections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.http_errors_sections.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationHttpErrorsSectionsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.http_errors_sections)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.http_errors_sections[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationHttpErrorsSectionsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.http_errors_sections)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.http_errors_sections[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationHttpErrorsSectionsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.http_errors_sections)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.http_errors_sections[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogForwards(
  args: InferRequestType<typeof client.services.haproxy.configuration.log_forwards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.log_forwards.$get(args, options))
}

export async function postServicesHaproxyConfigurationLogForwards(
  args: InferRequestType<typeof client.services.haproxy.configuration.log_forwards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationLogForwardsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationLogForwardsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['binds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].binds.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationLogForwardsParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['binds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].binds.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['binds'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].binds[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationLogForwardsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['binds'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].binds[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationLogForwardsParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['binds'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].binds[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameDgramBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['dgram_binds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].dgram_binds.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationLogForwardsParentNameDgramBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['dgram_binds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].dgram_binds.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameDgramBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['dgram_binds'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].dgram_binds[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationLogForwardsParentNameDgramBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['dgram_binds'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].dgram_binds[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationLogForwardsParentNameDgramBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['dgram_binds'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].dgram_binds[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets.$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationLogForwardsParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets.$put(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationLogForwardsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationLogForwardsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationLogForwardsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationLogForwardsParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_forwards)[':parent_name']['log_targets'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_forwards[':parent_name'].log_targets[
      ':index'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogProfiles(
  args: InferRequestType<typeof client.services.haproxy.configuration.log_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.log_profiles.$get(args, options))
}

export async function postServicesHaproxyConfigurationLogProfiles(
  args: InferRequestType<typeof client.services.haproxy.configuration.log_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_profiles.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationLogProfilesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_profiles)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_profiles[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationLogProfilesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_profiles)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_profiles[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationLogProfilesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.log_profiles)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.log_profiles[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationMailerEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.mailer_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailer_entries.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationMailerEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.mailer_entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailer_entries.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationMailerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailer_entries)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailer_entries[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationMailerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailer_entries)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailer_entries[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationMailerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailer_entries)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailer_entries[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationMailersSection(
  args: InferRequestType<typeof client.services.haproxy.configuration.mailers_section.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailers_section.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationMailersSection(
  args: InferRequestType<typeof client.services.haproxy.configuration.mailers_section.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailers_section.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationMailersSectionName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailers_section)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailers_section[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationMailersSectionName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailers_section)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailers_section[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationMailersSectionName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.mailers_section)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.mailers_section[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationNameservers(
  args: InferRequestType<typeof client.services.haproxy.configuration.nameservers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.nameservers.$get(args, options))
}

export async function postServicesHaproxyConfigurationNameservers(
  args: InferRequestType<typeof client.services.haproxy.configuration.nameservers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.nameservers.$post(args, options))
}

export async function getServicesHaproxyConfigurationNameserversName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.nameservers)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.nameservers[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationNameserversName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.nameservers)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.nameservers[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationNameserversName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.nameservers)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.nameservers[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeerEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.peer_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.peer_entries.$get(args, options))
}

export async function postServicesHaproxyConfigurationPeerEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.peer_entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_entries.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peer_entries)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_entries[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationPeerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peer_entries)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_entries[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationPeerEntriesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peer_entries)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_entries[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeerSection(
  args: InferRequestType<typeof client.services.haproxy.configuration.peer_section.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.peer_section.$get(args, options))
}

export async function postServicesHaproxyConfigurationPeerSection(
  args: InferRequestType<typeof client.services.haproxy.configuration.peer_section.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_section.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeerSectionName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peer_section)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_section[':name'].$get(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationPeerSectionName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peer_section)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peer_section[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['binds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].binds.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationPeersParentNameBinds(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['binds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].binds.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['binds'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].binds[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationPeersParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['binds'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].binds[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationPeersParentNameBindsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['binds'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].binds[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets.$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationPeersParentNameLogTargets(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets.$put(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets[':index'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationPeersParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets'][':index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets[':index'].$put(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxyConfigurationPeersParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets'][':index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets[':index'].$post(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationPeersParentNameLogTargetsIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['log_targets'][':index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].log_targets[':index'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].servers.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationPeersParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['servers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].servers.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['servers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].servers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationPeersParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['servers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].servers[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationPeersParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['servers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].servers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameTables(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].tables.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationPeersParentNameTables(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['tables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].tables.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationPeersParentNameTablesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['tables'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].tables[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationPeersParentNameTablesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['tables'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].tables[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationPeersParentNameTablesName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.peers)[':parent_name']['tables'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.peers[':parent_name'].tables[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationRaw(
  args: InferRequestType<typeof client.services.haproxy.configuration.raw.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.raw.$get(args, options))
}

export async function postServicesHaproxyConfigurationRaw(
  args: InferRequestType<typeof client.services.haproxy.configuration.raw.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.raw.$post(args, options))
}

export async function getServicesHaproxyConfigurationResolvers(
  args: InferRequestType<typeof client.services.haproxy.configuration.resolvers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.resolvers.$get(args, options))
}

export async function postServicesHaproxyConfigurationResolvers(
  args: InferRequestType<typeof client.services.haproxy.configuration.resolvers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.resolvers.$post(args, options))
}

export async function getServicesHaproxyConfigurationResolversName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.resolvers)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.resolvers[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationResolversName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.resolvers)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.resolvers[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationResolversName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.resolvers)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.resolvers[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationRings(
  args: InferRequestType<typeof client.services.haproxy.configuration.rings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.rings.$get(args, options))
}

export async function postServicesHaproxyConfigurationRings(
  args: InferRequestType<typeof client.services.haproxy.configuration.rings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.rings.$post(args, options))
}

export async function getServicesHaproxyConfigurationRingsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.rings)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationRingsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.rings)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationRingsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.rings)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationRingsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.rings)[':parent_name']['servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':parent_name'].servers.$get(args, options),
  )
}

export async function postServicesHaproxyConfigurationRingsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.rings)[':parent_name']['servers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':parent_name'].servers.$post(args, options),
  )
}

export async function getServicesHaproxyConfigurationRingsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.rings)[':parent_name']['servers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':parent_name'].servers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesHaproxyConfigurationRingsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.rings)[':parent_name']['servers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':parent_name'].servers[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesHaproxyConfigurationRingsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.rings)[':parent_name']['servers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.rings[':parent_name'].servers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyConfigurationTraces(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.traces.$get(args, options))
}

export async function putServicesHaproxyConfigurationTraces(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.traces.$put(args, options))
}

export async function postServicesHaproxyConfigurationTraces(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.traces.$post(args, options))
}

export async function deleteServicesHaproxyConfigurationTraces(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.traces.$delete(args, options))
}

export async function postServicesHaproxyConfigurationTracesEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.traces.entries.$post(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationTracesEntries(
  args: InferRequestType<typeof client.services.haproxy.configuration.traces.entries.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.traces.entries.$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationUserlists(
  args: InferRequestType<typeof client.services.haproxy.configuration.userlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.userlists.$get(args, options))
}

export async function postServicesHaproxyConfigurationUserlists(
  args: InferRequestType<typeof client.services.haproxy.configuration.userlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.userlists.$post(args, options))
}

export async function getServicesHaproxyConfigurationUserlistsName(
  args: InferRequestType<(typeof client.services.haproxy.configuration.userlists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.userlists[':name'].$get(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationUserlistsName(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.userlists)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.userlists[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationUsers(
  args: InferRequestType<typeof client.services.haproxy.configuration.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.users.$get(args, options))
}

export async function postServicesHaproxyConfigurationUsers(
  args: InferRequestType<typeof client.services.haproxy.configuration.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.users.$post(args, options))
}

export async function getServicesHaproxyConfigurationUsersUsername(
  args: InferRequestType<(typeof client.services.haproxy.configuration.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.users[':username'].$get(args, options),
  )
}

export async function putServicesHaproxyConfigurationUsersUsername(
  args: InferRequestType<(typeof client.services.haproxy.configuration.users)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.users[':username'].$put(args, options),
  )
}

export async function deleteServicesHaproxyConfigurationUsersUsername(
  args: InferRequestType<
    (typeof client.services.haproxy.configuration.users)[':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.configuration.users[':username'].$delete(args, options),
  )
}

export async function getServicesHaproxyConfigurationVersion(
  args: InferRequestType<typeof client.services.haproxy.configuration.version.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.configuration.version.$get(args, options))
}

export async function getServicesHaproxyReloads(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.reloads.$get(undefined, options))
}

export async function getServicesHaproxyReloadsId(
  args: InferRequestType<(typeof client.services.haproxy.reloads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.reloads[':id'].$get(args, options))
}

export async function getServicesHaproxyRuntime(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.$get(undefined, options))
}

export async function getServicesHaproxyRuntimeAcls(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.acls.$get(undefined, options))
}

export async function getServicesHaproxyRuntimeAclsId(
  args: InferRequestType<(typeof client.services.haproxy.runtime.acls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.acls[':id'].$get(args, options))
}

export async function getServicesHaproxyRuntimeAclsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.acls)[':parent_name']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.acls[':parent_name'].entries.$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeAclsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.acls)[':parent_name']['entries']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.acls[':parent_name'].entries.$put(args, options),
  )
}

export async function postServicesHaproxyRuntimeAclsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.acls)[':parent_name']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.acls[':parent_name'].entries.$post(args, options),
  )
}

export async function getServicesHaproxyRuntimeAclsParentNameEntriesId(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.acls)[':parent_name']['entries'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.acls[':parent_name'].entries[':id'].$get(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeAclsParentNameEntriesId(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.acls)[':parent_name']['entries'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.acls[':parent_name'].entries[':id'].$delete(args, options),
  )
}

export async function getServicesHaproxyRuntimeAcme(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.acme.$get(undefined, options))
}

export async function putServicesHaproxyRuntimeAcme(
  args: InferRequestType<typeof client.services.haproxy.runtime.acme.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.acme.$put(args, options))
}

export async function getServicesHaproxyRuntimeBackendsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.backends)[':parent_name']['servers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.backends[':parent_name'].servers.$get(args, options),
  )
}

export async function postServicesHaproxyRuntimeBackendsParentNameServers(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.backends)[':parent_name']['servers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.backends[':parent_name'].servers.$post(args, options),
  )
}

export async function getServicesHaproxyRuntimeBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.backends)[':parent_name']['servers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.backends[':parent_name'].servers[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.backends)[':parent_name']['servers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.backends[':parent_name'].servers[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeBackendsParentNameServersName(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.backends)[':parent_name']['servers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.backends[':parent_name'].servers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyRuntimeInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.info.$get(undefined, options))
}

export async function getServicesHaproxyRuntimeMaps(
  args: InferRequestType<typeof client.services.haproxy.runtime.maps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.maps.$get(args, options))
}

export async function getServicesHaproxyRuntimeMapsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.maps)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.maps[':name'].$get(args, options))
}

export async function putServicesHaproxyRuntimeMapsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.maps)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.maps[':name'].$put(args, options))
}

export async function deleteServicesHaproxyRuntimeMapsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.maps)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.maps[':name'].$delete(args, options))
}

export async function getServicesHaproxyRuntimeMapsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries.$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeMapsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries.$put(args, options),
  )
}

export async function postServicesHaproxyRuntimeMapsParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries.$post(args, options),
  )
}

export async function getServicesHaproxyRuntimeMapsParentNameEntriesId(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries[':id'].$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeMapsParentNameEntriesId(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries[':id'].$put(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeMapsParentNameEntriesId(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.maps)[':parent_name']['entries'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.maps[':parent_name'].entries[':id'].$delete(args, options),
  )
}

export async function getServicesHaproxyRuntimeSslCaFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.ssl_ca_files.$get(undefined, options))
}

export async function postServicesHaproxyRuntimeSslCaFiles(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_ca_files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.ssl_ca_files.$post(args, options))
}

export async function getServicesHaproxyRuntimeSslCaFilesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_ca_files)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_ca_files[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeSslCaFilesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_ca_files)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_ca_files[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeSslCaFilesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_ca_files)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_ca_files[':name'].$delete(args, options),
  )
}

export async function postServicesHaproxyRuntimeSslCaFilesNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.ssl_ca_files)[':name']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_ca_files[':name'].entries.$post(args, options),
  )
}

export async function getServicesHaproxyRuntimeSslCaFilesNameEntriesIndex(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.ssl_ca_files)[':name']['entries'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_ca_files[':name'].entries[':index'].$get(args, options),
  )
}

export async function getServicesHaproxyRuntimeSslCerts(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.ssl_certs.$get(undefined, options))
}

export async function postServicesHaproxyRuntimeSslCerts(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_certs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.ssl_certs.$post(args, options))
}

export async function getServicesHaproxyRuntimeSslCertsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_certs)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.ssl_certs[':name'].$get(args, options))
}

export async function putServicesHaproxyRuntimeSslCertsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_certs)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.ssl_certs[':name'].$put(args, options))
}

export async function deleteServicesHaproxyRuntimeSslCertsName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_certs)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_certs[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyRuntimeSslCrlFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.ssl_crl_files.$get(undefined, options))
}

export async function postServicesHaproxyRuntimeSslCrlFiles(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_crl_files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.runtime.ssl_crl_files.$post(args, options))
}

export async function getServicesHaproxyRuntimeSslCrlFilesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_crl_files)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crl_files[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyRuntimeSslCrlFilesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.ssl_crl_files)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crl_files[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeSslCrlFilesName(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.ssl_crl_files)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crl_files[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyRuntimeSslCrtLists(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.ssl_crt_lists.$get(undefined, options))
}

export async function getServicesHaproxyRuntimeSslCrtListsEntries(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_crt_lists.entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crt_lists.entries.$get(args, options),
  )
}

export async function postServicesHaproxyRuntimeSslCrtListsEntries(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_crt_lists.entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crt_lists.entries.$post(args, options),
  )
}

export async function deleteServicesHaproxyRuntimeSslCrtListsEntries(
  args: InferRequestType<typeof client.services.haproxy.runtime.ssl_crt_lists.entries.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.ssl_crt_lists.entries.$delete(args, options),
  )
}

export async function getServicesHaproxyRuntimeStickTables(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.runtime.stick_tables.$get(undefined, options))
}

export async function getServicesHaproxyRuntimeStickTablesName(
  args: InferRequestType<(typeof client.services.haproxy.runtime.stick_tables)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.stick_tables[':name'].$get(args, options),
  )
}

export async function getServicesHaproxyRuntimeStickTablesParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.stick_tables)[':parent_name']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.stick_tables[':parent_name'].entries.$get(args, options),
  )
}

export async function postServicesHaproxyRuntimeStickTablesParentNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.runtime.stick_tables)[':parent_name']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.runtime.stick_tables[':parent_name'].entries.$post(args, options),
  )
}

export async function getServicesHaproxySites(
  args: InferRequestType<typeof client.services.haproxy.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.sites.$get(args, options))
}

export async function postServicesHaproxySites(
  args: InferRequestType<typeof client.services.haproxy.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.sites.$post(args, options))
}

export async function getServicesHaproxySitesName(
  args: InferRequestType<(typeof client.services.haproxy.sites)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.sites[':name'].$get(args, options))
}

export async function putServicesHaproxySitesName(
  args: InferRequestType<(typeof client.services.haproxy.sites)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.sites[':name'].$put(args, options))
}

export async function deleteServicesHaproxySitesName(
  args: InferRequestType<(typeof client.services.haproxy.sites)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.sites[':name'].$delete(args, options))
}

export async function getServicesHaproxySpoe(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.spoe.$get(undefined, options))
}

export async function getServicesHaproxySpoeParentNameVersion(
  args: InferRequestType<(typeof client.services.haproxy.spoe)[':parent_name']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe[':parent_name'].version.$get(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.spoe.spoe_files.$get(undefined, options))
}

export async function postServicesHaproxySpoeSpoeFiles(
  args: InferRequestType<typeof client.services.haproxy.spoe.spoe_files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.spoe.spoe_files.$post(args, options))
}

export async function getServicesHaproxySpoeSpoeFilesName(
  args: InferRequestType<(typeof client.services.haproxy.spoe.spoe_files)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.spoe.spoe_files[':name'].$get(args, options))
}

export async function deleteServicesHaproxySpoeSpoeFilesName(
  args: InferRequestType<(typeof client.services.haproxy.spoe.spoe_files)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopes(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes.$get(args, options),
  )
}

export async function postServicesHaproxySpoeSpoeFilesParentNameScopes(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes.$post(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':name'].$get(args, options),
  )
}

export async function deleteServicesHaproxySpoeSpoeFilesParentNameScopesName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgents(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].agents.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgents(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['agents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].agents.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['agents'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].agents[
      ':name'
    ].$get(args, options),
  )
}

export async function putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['agents'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].agents[
      ':name'
    ].$put(args, options),
  )
}

export async function deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['agents'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].agents[
      ':name'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroups(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].groups.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroups(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].groups.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['groups'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].groups[
      ':name'
    ].$get(args, options),
  )
}

export async function putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['groups'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].groups[
      ':name'
    ].$put(args, options),
  )
}

export async function deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['groups'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].groups[
      ':name'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessages(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].messages.$get(
      args,
      options,
    ),
  )
}

export async function postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessages(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].messages.$post(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['messages'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].messages[
      ':name'
    ].$get(args, options),
  )
}

export async function putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['messages'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].messages[
      ':name'
    ].$put(args, options),
  )
}

export async function deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesName(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['scopes'][':scope_name']['messages'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].scopes[':scope_name'].messages[
      ':name'
    ].$delete(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameTransactions(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].transactions.$get(args, options),
  )
}

export async function postServicesHaproxySpoeSpoeFilesParentNameTransactions(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['transactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].transactions.$post(args, options),
  )
}

export async function getServicesHaproxySpoeSpoeFilesParentNameTransactionsId(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['transactions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].transactions[':id'].$get(args, options),
  )
}

export async function putServicesHaproxySpoeSpoeFilesParentNameTransactionsId(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['transactions'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].transactions[':id'].$put(args, options),
  )
}

export async function deleteServicesHaproxySpoeSpoeFilesParentNameTransactionsId(
  args: InferRequestType<
    (typeof client.services.haproxy.spoe.spoe_files)[':parent_name']['transactions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.spoe.spoe_files[':parent_name'].transactions[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesHaproxyStats(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.stats.$get(undefined, options))
}

export async function getServicesHaproxyStatsNative(
  args: InferRequestType<typeof client.services.haproxy.stats.native.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.stats.native.$get(args, options))
}

export async function getServicesHaproxyStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.storage.$get(undefined, options))
}

export async function getServicesHaproxyStorageGeneral(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.storage.general.$get(undefined, options))
}

export async function postServicesHaproxyStorageGeneral(
  args: InferRequestType<typeof client.services.haproxy.storage.general.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.general.$post(args, options))
}

export async function getServicesHaproxyStorageGeneralName(
  args: InferRequestType<(typeof client.services.haproxy.storage.general)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.general[':name'].$get(args, options))
}

export async function putServicesHaproxyStorageGeneralName(
  args: InferRequestType<(typeof client.services.haproxy.storage.general)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.general[':name'].$put(args, options))
}

export async function deleteServicesHaproxyStorageGeneralName(
  args: InferRequestType<(typeof client.services.haproxy.storage.general)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.general[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyStorageMaps(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.storage.maps.$get(undefined, options))
}

export async function postServicesHaproxyStorageMaps(
  args: InferRequestType<typeof client.services.haproxy.storage.maps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.maps.$post(args, options))
}

export async function getServicesHaproxyStorageMapsName(
  args: InferRequestType<(typeof client.services.haproxy.storage.maps)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.maps[':name'].$get(args, options))
}

export async function putServicesHaproxyStorageMapsName(
  args: InferRequestType<(typeof client.services.haproxy.storage.maps)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.maps[':name'].$put(args, options))
}

export async function deleteServicesHaproxyStorageMapsName(
  args: InferRequestType<(typeof client.services.haproxy.storage.maps)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.maps[':name'].$delete(args, options))
}

export async function getServicesHaproxyStorageSslCertificates(options?: ClientRequestOptions) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_certificates.$get(undefined, options),
  )
}

export async function postServicesHaproxyStorageSslCertificates(
  args: InferRequestType<typeof client.services.haproxy.storage.ssl_certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.ssl_certificates.$post(args, options))
}

export async function getServicesHaproxyStorageSslCertificatesName(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_certificates)[':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_certificates[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyStorageSslCertificatesName(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_certificates)[':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_certificates[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyStorageSslCertificatesName(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_certificates)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_certificates[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyStorageSslCrtLists(options?: ClientRequestOptions) {
  return await parseResponse(client.services.haproxy.storage.ssl_crt_lists.$get(undefined, options))
}

export async function postServicesHaproxyStorageSslCrtLists(
  args: InferRequestType<typeof client.services.haproxy.storage.ssl_crt_lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.storage.ssl_crt_lists.$post(args, options))
}

export async function getServicesHaproxyStorageSslCrtListsName(
  args: InferRequestType<(typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].$get(args, options),
  )
}

export async function putServicesHaproxyStorageSslCrtListsName(
  args: InferRequestType<(typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].$put(args, options),
  )
}

export async function deleteServicesHaproxyStorageSslCrtListsName(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].$delete(args, options),
  )
}

export async function getServicesHaproxyStorageSslCrtListsNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].entries.$get(args, options),
  )
}

export async function postServicesHaproxyStorageSslCrtListsNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['entries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].entries.$post(args, options),
  )
}

export async function deleteServicesHaproxyStorageSslCrtListsNameEntries(
  args: InferRequestType<
    (typeof client.services.haproxy.storage.ssl_crt_lists)[':name']['entries']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.haproxy.storage.ssl_crt_lists[':name'].entries.$delete(args, options),
  )
}

export async function getServicesHaproxyTransactions(
  args: InferRequestType<typeof client.services.haproxy.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.transactions.$get(args, options))
}

export async function postServicesHaproxyTransactions(
  args: InferRequestType<typeof client.services.haproxy.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.transactions.$post(args, options))
}

export async function getServicesHaproxyTransactionsId(
  args: InferRequestType<(typeof client.services.haproxy.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.transactions[':id'].$get(args, options))
}

export async function putServicesHaproxyTransactionsId(
  args: InferRequestType<(typeof client.services.haproxy.transactions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.transactions[':id'].$put(args, options))
}

export async function deleteServicesHaproxyTransactionsId(
  args: InferRequestType<(typeof client.services.haproxy.transactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.haproxy.transactions[':id'].$delete(args, options))
}

export async function getSpecification(options?: ClientRequestOptions) {
  return await parseResponse(client.specification.$get(undefined, options))
}

export async function getSpecificationOpenapiv3(options?: ClientRequestOptions) {
  return await parseResponse(client.specification_openapiv3.$get(undefined, options))
}
