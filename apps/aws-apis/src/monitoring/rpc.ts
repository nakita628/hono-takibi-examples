import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionDeleteAlarms(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAlarms'].$get(args, options))
}

export async function postActionDeleteAlarms(
  args: InferRequestType<(typeof client)['#Action=DeleteAlarms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAlarms'].$post(args, options))
}

export async function getActionDeleteAnomalyDetector(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAnomalyDetector'].$get(args, options))
}

export async function postActionDeleteAnomalyDetector(
  args: InferRequestType<(typeof client)['#Action=DeleteAnomalyDetector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAnomalyDetector'].$post(args, options))
}

export async function getActionDeleteDashboards(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDashboards'].$get(args, options))
}

export async function postActionDeleteDashboards(
  args: InferRequestType<(typeof client)['#Action=DeleteDashboards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDashboards'].$post(args, options))
}

export async function getActionDeleteInsightRules(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInsightRules'].$get(args, options))
}

export async function postActionDeleteInsightRules(
  args: InferRequestType<(typeof client)['#Action=DeleteInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInsightRules'].$post(args, options))
}

export async function getActionDeleteMetricStream(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteMetricStream'].$get(args, options))
}

export async function postActionDeleteMetricStream(
  args: InferRequestType<(typeof client)['#Action=DeleteMetricStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteMetricStream'].$post(args, options))
}

export async function getActionDescribeAlarmHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarmHistory'].$get(args, options))
}

export async function postActionDescribeAlarmHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarmHistory'].$post(args, options))
}

export async function getActionDescribeAlarms(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarms'].$get(args, options))
}

export async function postActionDescribeAlarms(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarms'].$post(args, options))
}

export async function getActionDescribeAlarmsForMetric(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarmsForMetric'].$get(args, options))
}

export async function postActionDescribeAlarmsForMetric(
  args: InferRequestType<(typeof client)['#Action=DescribeAlarmsForMetric']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAlarmsForMetric'].$post(args, options))
}

export async function getActionDescribeAnomalyDetectors(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAnomalyDetectors'].$get(args, options))
}

export async function postActionDescribeAnomalyDetectors(
  args: InferRequestType<(typeof client)['#Action=DescribeAnomalyDetectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAnomalyDetectors'].$post(args, options))
}

export async function getActionDescribeInsightRules(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInsightRules'].$get(args, options))
}

export async function postActionDescribeInsightRules(
  args: InferRequestType<(typeof client)['#Action=DescribeInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInsightRules'].$post(args, options))
}

export async function getActionDisableAlarmActions(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableAlarmActions'].$get(args, options))
}

export async function postActionDisableAlarmActions(
  args: InferRequestType<(typeof client)['#Action=DisableAlarmActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableAlarmActions'].$post(args, options))
}

export async function getActionDisableInsightRules(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableInsightRules'].$get(args, options))
}

export async function postActionDisableInsightRules(
  args: InferRequestType<(typeof client)['#Action=DisableInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableInsightRules'].$post(args, options))
}

export async function getActionEnableAlarmActions(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableAlarmActions'].$get(args, options))
}

export async function postActionEnableAlarmActions(
  args: InferRequestType<(typeof client)['#Action=EnableAlarmActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableAlarmActions'].$post(args, options))
}

export async function getActionEnableInsightRules(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableInsightRules'].$get(args, options))
}

export async function postActionEnableInsightRules(
  args: InferRequestType<(typeof client)['#Action=EnableInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableInsightRules'].$post(args, options))
}

export async function getActionGetDashboard(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDashboard'].$get(args, options))
}

export async function postActionGetDashboard(
  args: InferRequestType<(typeof client)['#Action=GetDashboard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDashboard'].$post(args, options))
}

export async function getActionGetInsightRuleReport(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInsightRuleReport'].$get(args, options))
}

export async function postActionGetInsightRuleReport(
  args: InferRequestType<(typeof client)['#Action=GetInsightRuleReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInsightRuleReport'].$post(args, options))
}

export async function getActionGetMetricData(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricData'].$get(args, options))
}

export async function postActionGetMetricData(
  args: InferRequestType<(typeof client)['#Action=GetMetricData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricData'].$post(args, options))
}

export async function getActionGetMetricStatistics(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricStatistics'].$get(args, options))
}

export async function postActionGetMetricStatistics(
  args: InferRequestType<(typeof client)['#Action=GetMetricStatistics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricStatistics'].$post(args, options))
}

export async function getActionGetMetricStream(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricStream'].$get(args, options))
}

export async function postActionGetMetricStream(
  args: InferRequestType<(typeof client)['#Action=GetMetricStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricStream'].$post(args, options))
}

export async function getActionGetMetricWidgetImage(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricWidgetImage'].$get(args, options))
}

export async function postActionGetMetricWidgetImage(
  args: InferRequestType<(typeof client)['#Action=GetMetricWidgetImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMetricWidgetImage'].$post(args, options))
}

export async function getActionListDashboards(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDashboards'].$get(args, options))
}

export async function postActionListDashboards(
  args: InferRequestType<(typeof client)['#Action=ListDashboards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDashboards'].$post(args, options))
}

export async function getActionListManagedInsightRules(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListManagedInsightRules'].$get(args, options))
}

export async function postActionListManagedInsightRules(
  args: InferRequestType<(typeof client)['#Action=ListManagedInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListManagedInsightRules'].$post(args, options))
}

export async function getActionListMetricStreams(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMetricStreams'].$get(args, options))
}

export async function postActionListMetricStreams(
  args: InferRequestType<(typeof client)['#Action=ListMetricStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMetricStreams'].$post(args, options))
}

export async function getActionListMetrics(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMetrics'].$get(args, options))
}

export async function postActionListMetrics(
  args: InferRequestType<(typeof client)['#Action=ListMetrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMetrics'].$post(args, options))
}

export async function getActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$get(args, options))
}

export async function postActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
}

export async function getActionPutAnomalyDetector(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutAnomalyDetector'].$get(args, options))
}

export async function postActionPutAnomalyDetector(
  args: InferRequestType<(typeof client)['#Action=PutAnomalyDetector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutAnomalyDetector'].$post(args, options))
}

export async function getActionPutCompositeAlarm(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutCompositeAlarm'].$get(args, options))
}

export async function postActionPutCompositeAlarm(
  args: InferRequestType<(typeof client)['#Action=PutCompositeAlarm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutCompositeAlarm'].$post(args, options))
}

export async function getActionPutDashboard(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutDashboard'].$get(args, options))
}

export async function postActionPutDashboard(
  args: InferRequestType<(typeof client)['#Action=PutDashboard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutDashboard'].$post(args, options))
}

export async function getActionPutInsightRule(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutInsightRule'].$get(args, options))
}

export async function postActionPutInsightRule(
  args: InferRequestType<(typeof client)['#Action=PutInsightRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutInsightRule'].$post(args, options))
}

export async function getActionPutManagedInsightRules(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutManagedInsightRules'].$get(args, options))
}

export async function postActionPutManagedInsightRules(
  args: InferRequestType<(typeof client)['#Action=PutManagedInsightRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutManagedInsightRules'].$post(args, options))
}

export async function getActionPutMetricAlarm(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricAlarm'].$get(args, options))
}

export async function postActionPutMetricAlarm(
  args: InferRequestType<(typeof client)['#Action=PutMetricAlarm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricAlarm'].$post(args, options))
}

export async function getActionPutMetricData(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricData'].$get(args, options))
}

export async function postActionPutMetricData(
  args: InferRequestType<(typeof client)['#Action=PutMetricData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricData'].$post(args, options))
}

export async function getActionPutMetricStream(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricStream'].$get(args, options))
}

export async function postActionPutMetricStream(
  args: InferRequestType<(typeof client)['#Action=PutMetricStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutMetricStream'].$post(args, options))
}

export async function getActionSetAlarmState(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetAlarmState'].$get(args, options))
}

export async function postActionSetAlarmState(
  args: InferRequestType<(typeof client)['#Action=SetAlarmState']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetAlarmState'].$post(args, options))
}

export async function getActionStartMetricStreams(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMetricStreams'].$get(args, options))
}

export async function postActionStartMetricStreams(
  args: InferRequestType<(typeof client)['#Action=StartMetricStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMetricStreams'].$post(args, options))
}

export async function getActionStopMetricStreams(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopMetricStreams'].$get(args, options))
}

export async function postActionStopMetricStreams(
  args: InferRequestType<(typeof client)['#Action=StopMetricStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopMetricStreams'].$post(args, options))
}

export async function getActionTagResource(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagResource'].$get(args, options))
}

export async function postActionTagResource(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagResource'].$post(args, options))
}

export async function getActionUntagResource(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagResource'].$get(args, options))
}

export async function postActionUntagResource(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagResource'].$post(args, options))
}
