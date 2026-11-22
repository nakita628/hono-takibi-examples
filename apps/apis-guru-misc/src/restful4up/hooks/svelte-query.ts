import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplyYaraRulesKey() {
  return ['apply-yara-rules'] as const
}

export function getCleanKey() {
  return ['clean'] as const
}

export function getEmulationOutputKey() {
  return ['emulation-output'] as const
}

export function getGeneratePartialYaraRulesKey() {
  return ['generate-partial-yara-rules'] as const
}

export function getUnpackKey() {
  return ['unpack'] as const
}

export function getPostApplyYaraRulesMutationKey() {
  return ['apply-yara-rules', '/apply-yara-rules', 'POST'] as const
}

export function getPostApplyYaraRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apply-yara-rules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['apply-yara-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplyYaraRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['apply-yara-rules']['$post']>) {
      return parseResponse(client['apply-yara-rules'].$post(args, options))
    },
  })
}

export function createPostApplyYaraRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['apply-yara-rules']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['apply-yara-rules']['$post']>,
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
    const mutationDefaults = getPostApplyYaraRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadCleanMutationKey() {
  return ['clean', '/clean', 'HEAD'] as const
}

export function getHeadCleanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$head>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadCleanMutationKey(),
    async mutationFn() {
      return parseResponse(client.clean.$head(undefined, options))
    },
  })
}

export function createHeadClean<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$head>>>>>
        | undefined,
        TError,
        void,
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
    const mutationDefaults = getHeadCleanMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmulationOutputMutationKey() {
  return ['emulation-output', '/emulation-output', 'POST'] as const
}

export function getPostEmulationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['emulation-output']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['emulation-output']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmulationOutputMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['emulation-output']['$post']>) {
      return parseResponse(client['emulation-output'].$post(args, options))
    },
  })
}

export function createPostEmulationOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['emulation-output']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['emulation-output']['$post']>,
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
    const mutationDefaults = getPostEmulationOutputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGeneratePartialYaraRulesMutationKey() {
  return ['generate-partial-yara-rules', '/generate-partial-yara-rules', 'POST'] as const
}

export function getPostGeneratePartialYaraRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['generate-partial-yara-rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGeneratePartialYaraRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']>,
    ) {
      return parseResponse(client['generate-partial-yara-rules'].$post(args, options))
    },
  })
}

export function createPostGeneratePartialYaraRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['generate-partial-yara-rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']>,
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
    const mutationDefaults = getPostGeneratePartialYaraRulesMutationOptions<
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

export function getPostUnpackMutationKey() {
  return ['unpack', '/unpack', 'POST'] as const
}

export function getPostUnpackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unpack.$post>>>>>,
    TError,
    InferRequestType<typeof client.unpack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnpackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unpack.$post>) {
      return parseResponse(client.unpack.$post(args, options))
    },
  })
}

export function createPostUnpack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unpack.$post>>>>>,
        TError,
        InferRequestType<typeof client.unpack.$post>,
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
    const mutationDefaults = getPostUnpackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
