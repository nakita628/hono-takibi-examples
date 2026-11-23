import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsV1RecordingRulesServiceKey() {
  return ['settings.v1.RecordingRulesService'] as const
}

export function getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/DeleteRecordingRule',
    'POST',
  ] as const
}

export function usePostSettingsV1RecordingRulesServiceDeleteRecordingRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['settings.v1.RecordingRulesService'].DeleteRecordingRule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsV1RecordingRulesServiceGetRecordingRuleKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/GetRecordingRule',
    'POST',
  ] as const
}

export function usePostSettingsV1RecordingRulesServiceGetRecordingRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1RecordingRulesServiceGetRecordingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['settings.v1.RecordingRulesService'].GetRecordingRule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsV1RecordingRulesServiceListRecordingRulesKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/ListRecordingRules',
    'POST',
  ] as const
}

export function usePostSettingsV1RecordingRulesServiceListRecordingRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1RecordingRulesServiceListRecordingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['settings.v1.RecordingRulesService'].ListRecordingRules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/UpsertRecordingRule',
    'POST',
  ] as const
}

export function usePostSettingsV1RecordingRulesServiceUpsertRecordingRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['settings.v1.RecordingRulesService'].UpsertRecordingRule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
