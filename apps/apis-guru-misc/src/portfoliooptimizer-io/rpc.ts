import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAssetsAnalysisAbsorptionRatio(
  args: InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.analysis['absorption-ratio'].$post(args, options))
}

export async function postAssetsAnalysisTurbulenceIndex(
  args: InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.analysis['turbulence-index'].$post(args, options))
}

export async function postAssetsCorrelationMatrix(
  args: InferRequestType<typeof client.assets.correlation.matrix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.$post(args, options))
}

export async function postAssetsCorrelationMatrixBounds(
  args: InferRequestType<typeof client.assets.correlation.matrix.bounds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.bounds.$post(args, options))
}

export async function postAssetsCorrelationMatrixDenoised(
  args: InferRequestType<typeof client.assets.correlation.matrix.denoised.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.denoised.$post(args, options))
}

export async function postAssetsCorrelationMatrixDistance(
  args: InferRequestType<typeof client.assets.correlation.matrix.distance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.distance.$post(args, options))
}

export async function postAssetsCorrelationMatrixEffectiveRank(
  args: InferRequestType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets.correlation.matrix['effective-rank'].$post(args, options),
  )
}

export async function postAssetsCorrelationMatrixInformativeness(
  args: InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.informativeness.$post(args, options))
}

export async function postAssetsCorrelationMatrixNearest(
  args: InferRequestType<typeof client.assets.correlation.matrix.nearest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.nearest.$post(args, options))
}

export async function postAssetsCorrelationMatrixRandom(
  args: InferRequestType<typeof client.assets.correlation.matrix.random.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.random.$post(args, options))
}

export async function postAssetsCorrelationMatrixShrinkage(
  args: InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.shrinkage.$post(args, options))
}

export async function postAssetsCorrelationMatrixTheoryImplied(
  args: InferRequestType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets.correlation.matrix['theory-implied'].$post(args, options),
  )
}

export async function postAssetsCorrelationMatrixValidation(
  args: InferRequestType<typeof client.assets.correlation.matrix.validation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.correlation.matrix.validation.$post(args, options))
}

export async function postAssetsCovarianceMatrix(
  args: InferRequestType<typeof client.assets.covariance.matrix.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.covariance.matrix.$post(args, options))
}

export async function postAssetsCovarianceMatrixEffectiveRank(
  args: InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.covariance.matrix['effective-rank'].$post(args, options))
}

export async function postAssetsCovarianceMatrixExponentiallyWeighted(
  args: InferRequestType<
    (typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets.covariance.matrix['exponentially-weighted'].$post(args, options),
  )
}

export async function postAssetsCovarianceMatrixValidation(
  args: InferRequestType<typeof client.assets.covariance.matrix.validation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.covariance.matrix.validation.$post(args, options))
}

export async function postAssetsKurtosis(
  args: InferRequestType<typeof client.assets.kurtosis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.kurtosis.$post(args, options))
}

export async function postAssetsPricesAdjusted(
  args: InferRequestType<typeof client.assets.prices.adjusted.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.prices.adjusted.$post(args, options))
}

export async function postAssetsPricesAdjustedForward(
  args: InferRequestType<typeof client.assets.prices.adjusted.forward.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.prices.adjusted.forward.$post(args, options))
}

export async function postAssetsReturns(
  args: InferRequestType<typeof client.assets.returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.returns.$post(args, options))
}

export async function postAssetsReturnsAverage(
  args: InferRequestType<typeof client.assets.returns.average.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.returns.average.$post(args, options))
}

export async function postAssetsReturnsSimulationBootstrap(
  args: InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.returns.simulation.bootstrap.$post(args, options))
}

export async function postAssetsSkewness(
  args: InferRequestType<typeof client.assets.skewness.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.skewness.$post(args, options))
}

export async function postAssetsVariance(
  args: InferRequestType<typeof client.assets.variance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.variance.$post(args, options))
}

export async function postAssetsVolatility(
  args: InferRequestType<typeof client.assets.volatility.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.volatility.$post(args, options))
}

export async function postFactorsResidualization(
  args: InferRequestType<typeof client.factors.residualization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.factors.residualization.$post(args, options))
}

export async function postPortfolioAnalysisAlpha(
  args: InferRequestType<typeof client.portfolio.analysis.alpha.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.alpha.$post(args, options))
}

export async function postPortfolioAnalysisBeta(
  args: InferRequestType<typeof client.portfolio.analysis.beta.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.beta.$post(args, options))
}

export async function postPortfolioAnalysisConditionalValueAtRisk(
  args: InferRequestType<(typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['conditional-value-at-risk'].$post(args, options),
  )
}

export async function postPortfolioAnalysisContributionsReturn(
  args: InferRequestType<typeof client.portfolio.analysis.contributions.return.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.contributions.return.$post(args, options))
}

export async function postPortfolioAnalysisContributionsRisk(
  args: InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.contributions.risk.$post(args, options))
}

export async function postPortfolioAnalysisCorrelationSpectrum(
  args: InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis['correlation-spectrum'].$post(args, options))
}

export async function postPortfolioAnalysisDiversificationRatio(
  args: InferRequestType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['diversification-ratio'].$post(args, options),
  )
}

export async function postPortfolioAnalysisDrawdowns(
  args: InferRequestType<typeof client.portfolio.analysis.drawdowns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.drawdowns.$post(args, options))
}

export async function postPortfolioAnalysisEffectiveNumberOfBets(
  args: InferRequestType<(typeof client.portfolio.analysis)['effective-number-of-bets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['effective-number-of-bets'].$post(args, options),
  )
}

export async function postPortfolioAnalysisFactorsExposures(
  args: InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.factors.exposures.$post(args, options))
}

export async function postPortfolioAnalysisMeanVarianceEfficientFrontier(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['mean-variance']['efficient-frontier'].$post(args, options),
  )
}

export async function postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['mean-variance']['minimum-variance-frontier'].$post(args, options),
  )
}

export async function postPortfolioAnalysisReturn(
  args: InferRequestType<typeof client.portfolio.analysis.return.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.return.$post(args, options))
}

export async function postPortfolioAnalysisReturnsAverage(
  args: InferRequestType<typeof client.portfolio.analysis.returns.average.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.returns.average.$post(args, options))
}

export async function postPortfolioAnalysisSharpeRatio(
  args: InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis['sharpe-ratio'].$post(args, options))
}

export async function postPortfolioAnalysisSharpeRatioBiasAdjusted(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['sharpe-ratio']['bias-adjusted'].$post(args, options),
  )
}

export async function postPortfolioAnalysisSharpeRatioConfidenceInterval(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['sharpe-ratio']['confidence-interval'].$post(args, options),
  )
}

export async function postPortfolioAnalysisSharpeRatioProbabilistic(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['sharpe-ratio'].probabilistic.$post(args, options),
  )
}

export async function postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength(
  args: InferRequestType<
    (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['sharpe-ratio'].probabilistic['minimum-track-record-length'].$post(
      args,
      options,
    ),
  )
}

export async function postPortfolioAnalysisTrackingError(
  args: InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis['tracking-error'].$post(args, options))
}

export async function postPortfolioAnalysisUlcerIndex(
  args: InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis['ulcer-index'].$post(args, options))
}

export async function postPortfolioAnalysisUlcerPerformanceIndex(
  args: InferRequestType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.analysis['ulcer-performance-index'].$post(args, options),
  )
}

export async function postPortfolioAnalysisValueAtRisk(
  args: InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis['value-at-risk'].$post(args, options))
}

export async function postPortfolioAnalysisVolatility(
  args: InferRequestType<typeof client.portfolio.analysis.volatility.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.analysis.volatility.$post(args, options))
}

export async function postPortfolioConstructionInvestable(
  args: InferRequestType<typeof client.portfolio.construction.investable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.construction.investable.$post(args, options))
}

export async function postPortfolioConstructionMimicking(
  args: InferRequestType<typeof client.portfolio.construction.mimicking.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.construction.mimicking.$post(args, options))
}

export async function postPortfolioConstructionRandom(
  args: InferRequestType<typeof client.portfolio.construction.random.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.construction.random.$post(args, options))
}

export async function postPortfolioOptimizationEqualRiskContributions(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['equal-risk-contributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['equal-risk-contributions'].$post(args, options),
  )
}

export async function postPortfolioOptimizationEqualSharpeRatioContributions(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['equal-sharpe-ratio-contributions'].$post(args, options),
  )
}

export async function postPortfolioOptimizationEqualVolatilityWeighted(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['equal-volatility-weighted'].$post(args, options),
  )
}

export async function postPortfolioOptimizationEqualWeighted(
  args: InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.optimization['equal-weighted'].$post(args, options))
}

export async function postPortfolioOptimizationHierarchicalRiskParity(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['hierarchical-risk-parity'].$post(args, options),
  )
}

export async function postPortfolioOptimizationHierarchicalRiskParityClusteringBased(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['hierarchical-risk-parity']['clustering-based'].$post(
      args,
      options,
    ),
  )
}

export async function postPortfolioOptimizationInverseVarianceWeighted(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['inverse-variance-weighted'].$post(args, options),
  )
}

export async function postPortfolioOptimizationInverseVolatilityWeighted(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['inverse-volatility-weighted'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMarketCapitalizationWeighted(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['market-capitalization-weighted'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumDecorrelation(
  args: InferRequestType<(typeof client.portfolio.optimization)['maximum-decorrelation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-decorrelation'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumReturn(
  args: InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.optimization['maximum-return'].$post(args, options))
}

export async function postPortfolioOptimizationMaximumReturnDiversified(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-return'].diversified.$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumReturnSubsetResamplingBased(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-return']['subset-resampling-based'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumSharpeRatio(
  args: InferRequestType<(typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-sharpe-ratio'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumSharpeRatioDiversified(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-sharpe-ratio'].diversified.$post(args, options),
  )
}

export async function postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-sharpe-ratio']['subset-resampling-based'].$post(
      args,
      options,
    ),
  )
}

export async function postPortfolioOptimizationMaximumUlcerPerformanceIndex(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['maximum-ulcer-performance-index'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMeanVarianceEfficient(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['mean-variance-efficient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['mean-variance-efficient'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMeanVarianceEfficientDiversified(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['mean-variance-efficient'].diversified.$post(args, options),
  )
}

export async function postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['mean-variance-efficient']['subset-resampling-based'].$post(
      args,
      options,
    ),
  )
}

export async function postPortfolioOptimizationMinimumCorrelation(
  args: InferRequestType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['minimum-correlation'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMinimumUlcerIndex(
  args: InferRequestType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['minimum-ulcer-index'].$post(args, options),
  )
}

export async function postPortfolioOptimizationMinimumVariance(
  args: InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.optimization['minimum-variance'].$post(args, options))
}

export async function postPortfolioOptimizationMinimumVarianceDiversified(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['minimum-variance'].diversified.$post(args, options),
  )
}

export async function postPortfolioOptimizationMinimumVarianceSubsetResamplingBased(
  args: InferRequestType<
    (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.optimization['minimum-variance']['subset-resampling-based'].$post(
      args,
      options,
    ),
  )
}

export async function postPortfolioOptimizationMostDiversified(
  args: InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.optimization['most-diversified'].$post(args, options))
}

export async function postPortfolioSimulationRebalancingDriftWeight(
  args: InferRequestType<(typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.simulation.rebalancing['drift-weight'].$post(args, options),
  )
}

export async function postPortfolioSimulationRebalancingFixedWeight(
  args: InferRequestType<(typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.simulation.rebalancing['fixed-weight'].$post(args, options),
  )
}

export async function postPortfolioSimulationRebalancingRandomWeight(
  args: InferRequestType<
    (typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio.simulation.rebalancing['random-weight'].$post(args, options),
  )
}
