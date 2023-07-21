/* eslint-disable @typescript-eslint/explicit-function-return-type */
// automation-script.js
import { Builder, Capabilities } from 'selenium-webdriver'

async function runAutomation() {
  // Set up the WebDriver capabilities to use Chrome
  const capabilities = Capabilities.chrome()

  // Create the WebDriver instance
  const driver = await new Builder().withCapabilities(capabilities).build()

  try {
    // Do your automation tasks here, e.g., navigating to Google
    await driver.get('https://www.google.com')

    // Perform other actions as needed
    // ...
  } finally {
    // Close the WebDriver when finished
    await driver.quit()
  }
}

runAutomation()
