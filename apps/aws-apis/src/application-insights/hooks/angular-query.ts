import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetEC2WindowsBarleyServiceCreateApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceCreateComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceCreateLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
  ] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeObservationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeProblemKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListApplicationsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListApplications'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListComponentsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListComponents'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListLogPatternsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListProblemsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListProblems'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceTagResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.TagResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUntagResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UntagResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern'] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceCreateApplication<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceCreateComponent<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceCreateLogPattern<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDeleteApplication<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDeleteComponent<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPattern<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeApplication<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeComponent<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfiguration<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendation<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPattern<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeObservation<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeProblem<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservations<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListApplications',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListApplications'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListApplications<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListComponentsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListComponents',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListComponents',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListComponentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListComponents'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListComponents<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceListComponentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistory<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSets<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListLogPatterns<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListProblemsMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListProblems',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListProblems',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListProblemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListProblemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListProblems'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListProblems<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceListProblemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.TagResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceTagResource<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UntagResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceUntagResource<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceUpdateApplication<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceUpdateComponent<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfiguration<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternMutationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern',
    'POST',
  ] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPattern<
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
                  (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
