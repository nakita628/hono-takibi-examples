import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20181031LayersLayerNameVersionsVersionNumberPolicy(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(args, options),
  )
}

export async function post20181031LayersLayerNameVersionsVersionNumberPolicy(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$post(
      args,
      options,
    ),
  )
}

export async function get20150331FunctionsFunctionNamePolicy(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].policy.$get(args, options),
  )
}

export async function post20150331FunctionsFunctionNamePolicy(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].policy.$post(args, options),
  )
}

export async function get20150331FunctionsFunctionNameAliases(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].aliases.$get(args, options),
  )
}

export async function post20150331FunctionsFunctionNameAliases(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].aliases.$post(args, options),
  )
}

export async function get20200422CodeSigningConfigsIndex(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-04-22']['code-signing-configs'].index.$get(args, options))
}

export async function post20200422CodeSigningConfigsIndex(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-04-22']['code-signing-configs'].index.$post(args, options),
  )
}

export async function get20150331EventSourceMappingsIndex(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31']['event-source-mappings'].index.$get(args, options),
  )
}

export async function post20150331EventSourceMappingsIndex(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31']['event-source-mappings'].index.$post(args, options),
  )
}

export async function post20150331Functions(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-03-31'].functions.$post(args, options))
}

export async function get20211031FunctionsFunctionNameUrl(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-10-31'].functions[':FunctionName'].url.$get(args, options),
  )
}

export async function put20211031FunctionsFunctionNameUrl(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-10-31'].functions[':FunctionName'].url.$put(args, options),
  )
}

export async function post20211031FunctionsFunctionNameUrl(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-10-31'].functions[':FunctionName'].url.$post(args, options),
  )
}

export async function delete20211031FunctionsFunctionNameUrl(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-10-31'].functions[':FunctionName'].url.$delete(args, options),
  )
}

export async function get20150331FunctionsFunctionNameAliasesName(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(args, options),
  )
}

export async function put20150331FunctionsFunctionNameAliasesName(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$put(args, options),
  )
}

export async function delete20150331FunctionsFunctionNameAliasesName(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$delete(args, options),
  )
}

export async function get20200422CodeSigningConfigsCodeSigningConfigArn(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(args, options),
  )
}

export async function put20200422CodeSigningConfigsCodeSigningConfigArn(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$put(args, options),
  )
}

export async function delete20200422CodeSigningConfigsCodeSigningConfigArn(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$delete(args, options),
  )
}

export async function get20150331EventSourceMappingsUUID(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31']['event-source-mappings'][':UUID'].$get(args, options),
  )
}

export async function put20150331EventSourceMappingsUUID(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31']['event-source-mappings'][':UUID'].$put(args, options),
  )
}

export async function delete20150331EventSourceMappingsUUID(
  args: InferRequestType<
    (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31']['event-source-mappings'][':UUID'].$delete(args, options),
  )
}

export async function get20150331FunctionsFunctionName(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-03-31'].functions[':FunctionName'].$get(args, options))
}

export async function delete20150331FunctionsFunctionName(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-03-31'].functions[':FunctionName'].$delete(args, options))
}

export async function get20200630FunctionsFunctionNameCodeSigningConfig(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(args, options),
  )
}

export async function put20200630FunctionsFunctionNameCodeSigningConfig(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$put(args, options),
  )
}

export async function delete20200630FunctionsFunctionNameCodeSigningConfig(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$delete(args, options),
  )
}

export async function put20171031FunctionsFunctionNameConcurrency(
  args: InferRequestType<
    (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2017-10-31'].functions[':FunctionName'].concurrency.$put(args, options),
  )
}

export async function delete20171031FunctionsFunctionNameConcurrency(
  args: InferRequestType<
    (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2017-10-31'].functions[':FunctionName'].concurrency.$delete(args, options),
  )
}

export async function get20190925FunctionsFunctionNameEventInvokeConfig(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(args, options),
  )
}

export async function put20190925FunctionsFunctionNameEventInvokeConfig(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$put(args, options),
  )
}

export async function post20190925FunctionsFunctionNameEventInvokeConfig(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$post(args, options),
  )
}

export async function delete20190925FunctionsFunctionNameEventInvokeConfig(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$delete(args, options),
  )
}

export async function get20181031LayersLayerNameVersionsVersionNumber(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(args, options),
  )
}

export async function delete20181031LayersLayerNameVersionsVersionNumber(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$delete(args, options),
  )
}

export async function get20190930FunctionsFunctionNameProvisionedConcurrencyQualifier(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
      args,
      options,
    ),
  )
}

export async function put20190930FunctionsFunctionNameProvisionedConcurrencyQualifier(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$put(
      args,
      options,
    ),
  )
}

export async function delete20190930FunctionsFunctionNameProvisionedConcurrencyQualifier(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$delete(
      args,
      options,
    ),
  )
}

export async function get20160819AccountSettingsIndex(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2016-08-19']['account-settings'].index.$get(args, options))
}

export async function get20190930FunctionsFunctionNameConcurrency(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-30'].functions[':FunctionName'].concurrency.$get(args, options),
  )
}

export async function get20150331FunctionsFunctionNameConfiguration(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].configuration.$get(args, options),
  )
}

export async function put20150331FunctionsFunctionNameConfiguration(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].configuration.$put(args, options),
  )
}

export async function get20181031LayersFindLayerVersionArn(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(args, options),
  )
}

export async function get20210720FunctionsFunctionNameRuntimeManagementConfig(
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(
      args,
      options,
    ),
  )
}

export async function put20210720FunctionsFunctionNameRuntimeManagementConfig(
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$put(
      args,
      options,
    ),
  )
}

export async function post20150331FunctionsFunctionNameInvocations(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].invocations.$post(args, options),
  )
}

export async function post20141113FunctionsFunctionNameInvokeAsyncIndex(
  args: InferRequestType<
    (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2014-11-13'].functions[':FunctionName']['invoke-async'].index.$post(args, options),
  )
}

export async function post20211115FunctionsFunctionNameResponseStreamingInvocations(
  args: InferRequestType<
    (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-11-15'].functions[':FunctionName']['response-streaming-invocations'].$post(
      args,
      options,
    ),
  )
}

export async function get20190925FunctionsFunctionNameEventInvokeConfigList(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(args, options),
  )
}

export async function get20211031FunctionsFunctionNameUrls(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2021-10-31'].functions[':FunctionName'].urls.$get(args, options),
  )
}

export async function get20150331FunctionsIndex(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-03-31'].functions.index.$get(args, options))
}

export async function get20200422CodeSigningConfigsCodeSigningConfigArnFunctions(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(
      args,
      options,
    ),
  )
}

export async function get20181031LayersLayerNameVersions(
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2018-10-31'].layers[':LayerName'].versions.$get(args, options))
}

export async function post20181031LayersLayerNameVersions(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions.$post(args, options),
  )
}

export async function get20181031Layers(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2018-10-31'].layers.$get(args, options))
}

export async function get20190930FunctionsFunctionNameProvisionedConcurrencyListALL(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
      args,
      options,
    ),
  )
}

export async function get20170331TagsARN(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-03-31'].tags[':ARN'].$get(args, options))
}

export async function post20170331TagsARN(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-03-31'].tags[':ARN'].$post(args, options))
}

export async function get20150331FunctionsFunctionNameVersions(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].versions.$get(args, options),
  )
}

export async function post20150331FunctionsFunctionNameVersions(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].versions.$post(args, options),
  )
}

export async function delete20181031LayersLayerNameVersionsVersionNumberPolicyStatementId(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy[
      ':StatementId'
    ].$delete(args, options),
  )
}

export async function delete20150331FunctionsFunctionNamePolicyStatementId(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].policy[':StatementId'].$delete(args, options),
  )
}

export async function delete20170331TagsARNTagKeys(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-03-31'].tags[':ARN#tagKeys'].$delete(args, options))
}

export async function put20150331FunctionsFunctionNameCode(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-03-31'].functions[':FunctionName'].code.$put(args, options),
  )
}
