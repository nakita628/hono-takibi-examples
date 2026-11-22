import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsV1RecordingRulesServiceKey() {
  return ['settings.v1.RecordingRulesService'] as const
}

export function getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleMutationKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/DeleteRecordingRule',
    'POST',
  ] as const
}

export function getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
      >,
    ) {
      return parseResponse(
        client['settings.v1.RecordingRulesService'].DeleteRecordingRule.$post(args, options),
      )
    },
  })
}

export function createPostSettingsV1RecordingRulesServiceDeleteRecordingRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['settings.v1.RecordingRulesService']['DeleteRecordingRule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSettingsV1RecordingRulesServiceDeleteRecordingRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSettingsV1RecordingRulesServiceGetRecordingRuleMutationKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/GetRecordingRule',
    'POST',
  ] as const
}

export function getPostSettingsV1RecordingRulesServiceGetRecordingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1RecordingRulesServiceGetRecordingRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
      >,
    ) {
      return parseResponse(
        client['settings.v1.RecordingRulesService'].GetRecordingRule.$post(args, options),
      )
    },
  })
}

export function createPostSettingsV1RecordingRulesServiceGetRecordingRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['settings.v1.RecordingRulesService']['GetRecordingRule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsV1RecordingRulesServiceGetRecordingRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSettingsV1RecordingRulesServiceListRecordingRulesMutationKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/ListRecordingRules',
    'POST',
  ] as const
}

export function getPostSettingsV1RecordingRulesServiceListRecordingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1RecordingRulesServiceListRecordingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
      >,
    ) {
      return parseResponse(
        client['settings.v1.RecordingRulesService'].ListRecordingRules.$post(args, options),
      )
    },
  })
}

export function createPostSettingsV1RecordingRulesServiceListRecordingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['settings.v1.RecordingRulesService']['ListRecordingRules']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSettingsV1RecordingRulesServiceListRecordingRulesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleMutationKey() {
  return [
    'settings.v1.RecordingRulesService',
    '/settings.v1.RecordingRulesService/UpsertRecordingRule',
    'POST',
  ] as const
}

export function getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
      >,
    ) {
      return parseResponse(
        client['settings.v1.RecordingRulesService'].UpsertRecordingRule.$post(args, options),
      )
    },
  })
}

export function createPostSettingsV1RecordingRulesServiceUpsertRecordingRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['settings.v1.RecordingRulesService']['UpsertRecordingRule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSettingsV1RecordingRulesServiceUpsertRecordingRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
