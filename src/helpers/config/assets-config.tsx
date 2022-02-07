import React from 'react';
import {
  Asset,
  getAssetInfoFactory,
  TokenIcon as DefaultTokenIcon,
  TokenIconProps,
} from '@aave/aave-ui-kit';

import { assetsList, stableAssets } from '../../ui-config/assets';
import CustomTokenIcon from '../../components/basic/CustomTokenIcon';
import { baseAsset } from '../../ui-config/networks';

export const getAssetInfo = getAssetInfoFactory(assetsList);

export const getAssetColor = (assetSymbol: string) => {
  const asset = getAssetInfo(assetSymbol);
  const assetColor = asset.color;

  return assetColor || '#2ebac6';
};

export const isAssetStable = (assetSymbol: string) => {
  const assetInfo = getAssetInfo(assetSymbol);
  return stableAssets.includes(assetInfo.symbol.toLocaleUpperCase());
};

// prettier-ignore
export const watSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDQgMzMiIGZpbGw9IiNGRkZGRkYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0zOC44NDMyIDIyLjQwOTdMMzguNjc2OCAyMi4zOTgxQzM4LjI2MzYgMjIuMzYyMyAzNy44NDggMjIuMzI3NSAzNy40NDY3IDIyLjI0NDdDMzUuNTkyNCAyMS44MDcyIDM0LjMyNzIgMjAuMDIyMyAzNC4xNjA4IDE3LjU4NTlDMzQuMTQ5MiAxNy40MDkyIDM0LjEzNzkgMTcuMjMxOSAzNC4xMzc5IDE3LjA1NTJDMzQuMTcyNCAxNi43NzEyIDM0LjIwOTggMTYuNDc2IDM0LjE5NiAxNi4xODA0QzM0LjE4NDcgMTMuNjYyIDMyLjU2NTggMTEuNjA1IDMwLjQyNTYgMTEuNDE1OEwzMC4yNDc2IDExLjQwNDVDMjkuODM0NCAxMS4zNjg0IDI5LjQyMTEgMTEuMzMzIDI5LjAxOTEgMTEuMjM3OUMyNy4xNjI5IDEwLjgwMTcgMjUuODk3MyA5LjAyODM2IDI1LjczMTMgNi41ODA5N0MyNS43MzEzIDYuNTU2NzkgMjUuNzMxMyA2LjU0NTUxIDI1LjczMTMgNi41MjIzQzI1LjgyNjEgNi4wMDEzNiAyNS44NjI4IDUuNDQ1OTIgMjUuODE0NSA0Ljg1NDcxQzI1LjYwMiAyLjQ3OTIgMjMuOTIzMiAwLjY0NTkwNyAyMS43NzI3IDAuNTg2OTE0QzIxLjczNzIgMC41ODY5MTQgMjEuNzAyNCAwLjU5ODUyMyAyMS42NTM3IDAuNTk4NTIzQzIxLjYxOTUgMC41OTg1MjMgMjEuNTcwNSAwLjU4NjkxNCAyMS41MzYgMC41ODY5MTRDMTkuMzg0MyAwLjY0NjIyOSAxNy42OTQxIDIuNDc5MiAxNy40OTMzIDQuODU0NzFDMTcuNDQ2MiA1LjQzNDMyIDE3LjQ4MTcgNS45ODk3NiAxNy41NzY4IDYuNTIyM0MxNy41NzY4IDYuNTQ1MTkgMTcuNTc2OCA2LjU1NjQ3IDE3LjU3NjggNi41ODA5N0MxNy40MTAxIDkuMDE1NDYgMTYuMTQ1MSAxMC44MDIgMTQuMjg5NiAxMS4yMzc5QzEzLjg4NjYgMTEuMzMzIDEzLjQ3MzQgMTEuMzY4MSAxMy4wNjAxIDExLjQwNDVMMTIuODkzOCAxMS40MTU4QzEwLjc1NDUgMTEuNjA1IDkuMTM0OTkgMTMuNjQ5OCA5LjEyMzM4IDE2LjE4MDRDOS4xMjMzOCAxNi40NzYgOS4xNDYyNyAxNi43NzEyIDkuMTgyMzggMTcuMDU1MkM5LjE3MDc3IDE3LjIzMjIgOS4xNzA3NyAxNy40MDk1IDkuMTU3ODggMTcuNTg1OUM4Ljk5NDEyIDIwLjAyMjYgNy43Mjg4MyAyMS44MDcyIDUuODcyMzMgMjIuMjQ0N0M1LjQ3MDY3IDIyLjMzOTEgNS4wNTc0IDIyLjM3NDYgNC42NDI4NCAyMi4zOTgxTDQuNDc3NDYgMjIuNDA5N0MyLjMzNzI4IDIyLjU5OSAtMC4xNjc4MTYgMjQuNjc5MiAwLjAwODgzOTcxIDI3LjcyOTRDMC4xNjIyODUgMzAuNDEzNyAyLjM4NDY3IDMxLjk3MjcgNC42MzEyMyAzMi4xMDMyTDQuODMyMDYgMzIuMTE0NUM2Ljk0ODA3IDMyLjExNDUgOC42ODU2MSAzMC4xNjQ5IDguODYyMjcgMjcuNTg3Mkw4Ljk0NTQ0IDI2LjA4NjZDOS4xMjMwNiAyMy43MTA4IDEwLjI5MzkgMjIuMDA3NyAxMi4wNjY5IDIxLjUxMTZDMTIuMzk3IDIxLjQxNjUgMTIuNzUyNiAyMS4zODExIDEzLjA5NDMgMjEuMzMzM0MxMy40NzMxIDIxLjI4NjMgMTMuODYzMSAyMS4yMzg5IDE0LjI0MTkgMjEuMTQ1NEMxNi4zMjIxIDIwLjYzNjQgMTcuMzYzNyAxNS42MjQ2IDE3LjMzOTIgMTUuNTA1NkwxNy4zNjM0IDE1LjA4MDFDMTcuNTI3NCAxMi43NTE0IDE4LjczMzQgMTAuOTkgMjAuNDgyOSAxMC41MDY0QzIwLjgxNTIgMTAuNDExNiAyMS4xNjgyIDEwLjM3NTkgMjEuNTEyMiAxMC4zMjgxQzIxLjU1ODMgMTAuMzI4MSAyMS42MDcgMTAuMzA1MiAyMS42NjQ3IDEwLjMwNTJDMjEuNzEzMyAxMC4zMDUyIDIxLjc1OTQgMTAuMzI4MSAyMS44MTkxIDEwLjMyODFDMjIuMTYxMSAxMC4zNzU1IDIyLjUwNTEgMTAuNDExNiAyMi44NDY4IDEwLjUwNjRDMjQuNjA4MiAxMC45OSAyNS44MDE5IDEyLjc0MDQgMjUuOTY4NiAxNS4wODAxTDI1Ljk5MTQgMTUuNTA1NkMyNS45Njg2IDE1LjYyNDYgMjcuMDA3MiAyMC42MzY0IDI5LjA5IDIxLjE0NTRDMjkuNDY2NSAyMS4yMzg5IDI5Ljg0NSAyMS4yODYzIDMwLjIyMzggMjEuMzMzM0MzMC41Njc3IDIxLjM4MDcgMzAuOTIwNyAyMS40MTY1IDMxLjI1MzEgMjEuNTExNkMzMy4wMzggMjIuMDA3NyAzNC4yMDg5IDIzLjcxMDggMzQuMzcyNiAyNi4wODY2TDM0LjQ1NTggMjcuNTg3MkMzNC42MzQgMzAuMTY0OSAzNi4zNTg3IDMyLjExNDUgMzguNDc2IDMyLjExNDVMMzguNjc2NSAzMi4xMDMyQzQwLjkyMzQgMzEuOTcyNyA0My4xNDQyIDMwLjQxMzcgNDMuMjk4OSAyNy43Mjk0QzQzLjQ4ODggMjQuNjc5MiA0MC45Njk4IDIyLjU5OSAzOC44NDMyIDIyLjQwOTdaTTQuODA3NTYgMzEuMjc1N1YzMS4yNjQ0VjMxLjI3NTdaTTM4LjQ4NzYgMzEuMjc1N1YzMS4yNjQ0VjMxLjI3NTdaIiBmaWxsPSIjMDA4RUVFIj48L3BhdGg+PHBhdGggZD0iTTMwLjIyNDMgMTEuNDA0M0MyOC4wMTQ4IDExLjQwNDMgMjYuMjk4OCAxMy4xNTI4IDI2LjA0MDMgMTUuNTY0N0MyNi4wMDM2IDE1Ljk0MzIgMjUuOTggMTYuMzIyIDI1Ljk2ODcgMTYuNjk5NUwyNS45MzM5IDE3LjM4NThDMjUuNzY3NiAxOS44MjE2IDI0LjUwMyAyMS42MDYyIDIyLjY0NjEgMjIuMDQzNkMyMi4zMTY0IDIyLjExNDIgMjEuOTg0MyAyMi4xNDk0IDIxLjY1MzIgMjIuMTcyOUMyMS4zMjM1IDIyLjE0OTQgMjAuOTc5NSAyMi4xMTM5IDIwLjY2MDQgMjIuMDQzNkMxOC44MDQyIDIxLjYwNjIgMTcuNTM5OSAxOS44MjEyIDE3LjM3NTEgMTcuMzg1OEwxNy4zMzk0IDE2LjY5OTVDMTcuMzE1MiAxNi4zMjIgMTcuMzAzNiAxNS45NDMyIDE3LjI2OTEgMTUuNTY0N0MxNy4wMDggMTMuMTUyOCAxNS4yOTQ2IDExLjQwNDMgMTMuMDgyOSAxMS40MDQzQzExLjAzODQgMTEuNDYzIDguODI3NjQgMTMuMzA2MiA4LjYyNjQ4IDE1LjY4MzdDOC40MDI3NiAxOC4yOTYxIDEwLjIzMzUgMjAuNDU5NSAxMi4zMTUzIDIwLjk2NzNDMTIuNjkyOCAyMS4wNjI3IDEzLjA3MTIgMjEuMTA5MSAxMy40NSAyMS4xNTY4QzEzLjc5MjcgMjEuMjA0NSAxNC4xMzU3IDIxLjIzOSAxNC40Nzc0IDIxLjMzMzVDMTkuMjY2MSAyMy4wMDc1IDE3Ljc1MzkgMjUuODIyNCAxNy43NTM5IDI1LjgyMjRDMTcuNTI4NiAyNi41MjI5IDE3LjI4MDcgMjcuMzYzMyAxNy4yODA3IDI4LjAwMjJDMTcuMjgwNyAzMC41OTA1IDE4LjkxNzcgMzIuNjk0NiAyMS42NjUyIDMyLjY5NDZDMjQuMjc0NCAzMi42OTQ2IDI2LjA1MTkgMzAuNTkwOCAyNi4wNTE5IDI4LjAwMjJDMjYuMDUxOSAyNy4zMjgyIDI1Ljc3MzcgMjYuMTQ4OSAyNS42MDg3IDI1LjY0MzJDMjUuNjA4NyAyNS42NDMyIDI0Ljc4MjEgMjIuMjQ1MSAyOC44MDY1IDIxLjMzMzhDMjkuMTQ4MiAyMS4yMzkzIDI5LjQ5MjIgMjEuMjA1MiAyOS44MzQyIDIxLjE1NzFDMzAuMjEyNyAyMS4xMDk3IDMwLjYwMzEgMjEuMDYzIDMwLjk4MTggMjAuOTY3NkMzMy4wNjI0IDIwLjQ2MDIgMzQuODgxOCAxOC4yOTY1IDM0LjY2OTEgMTUuNjg0QzM0LjQ5MTEgMTMuMzA2NiAzMi4yNyAxMS40NjMgMzAuMjI0MyAxMS40MDQzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSI+PC9wYXRoPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjE0LjE4NDkiIHkxPSIyOS4wOTg4IiB4Mj0iMjYuMDk5MSIgeTI9IjguNDYyNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBDMUIwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUNFNUZGIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+'

export const TokenIcon = (props: Omit<TokenIconProps, 'getAssetInfo'>) => {
  let icon = 'https://explorer.waterfall.network/favicon-72-precomposed.png';
  if (props.tokenSymbol.toLowerCase() === 'eth') icon = watSvg;
    return (
      <CustomTokenIcon
        {...props}
        tokenSymbol={props.tokenFullName || props.tokenSymbol}
        getAssetInfo={getAssetInfo}
        iconSvg={icon}
      />
    );

  // return <DefaultTokenIcon {...props} getAssetInfo={getAssetInfo} />;
};

export const formatWAT = (asset?: string) => {
  if (asset?.toLowerCase() === 'eth') return baseAsset;
  return asset || '';
};

export const formatNameWAT = (name?: string): string => {
  if (name?.toLowerCase() === 'ethereum') return baseAsset;
  return name || '';
};

export const formatIcon = (asset: { icon?: string; symbol: string }): string => {
  if (asset.symbol?.toLowerCase() === 'eth') return watSvg;
  return asset?.icon || '';
};

export const prepareAsset = (asset: Asset) => {
  return asset.formattedName && asset.shortSymbol && asset.name
    ? {
        ...asset,
        icon: formatIcon({ icon: asset?.icon, symbol: asset.symbol }),
        name: formatNameWAT(asset.name),
        shortSymbol: formatWAT(asset.shortSymbol),
        formattedName: formatWAT(asset.formattedName),
      }
    : {
        ...asset,
        icon: formatIcon({ icon: asset?.icon, symbol: asset.symbol }),
        name: formatWAT(asset.symbol),
        shortSymbol: formatWAT(asset.symbol),
        formattedName: formatWAT(asset.symbol),
      };
};
