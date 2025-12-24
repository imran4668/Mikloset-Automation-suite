import { TestInfo } from '@playwright/test';

export function logScenario(info: TestInfo) {
  const isRetry = info.retry > 0;

  console.log('==============================');
  console.log(`Feature  : ${info.file}`);
  console.log(`Scenario : ${info.title}`);
  console.log(`Project  : ${info.project.name}`);

  if (isRetry) {
    console.log(`🔁 RETRY ATTEMPT : ${info.retry}`);
  } else {
    console.log('▶ FIRST ATTEMPT');
  }

  console.log('==============================');
}

export function logResult(info: TestInfo) {
  if (info.status !== info.expectedStatus) {
    console.log(`❌ FAILED → ${info.title}`);
  } else {
    console.log(`✅ PASSED → ${info.title}`);
  }
}
