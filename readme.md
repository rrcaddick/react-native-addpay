# react-native-addpay

![npm](https://img.shields.io/npm/v/react-native-addpay)
![license](https://img.shields.io/npm/l/react-native-addpay)
![downloads](https://img.shields.io/npm/dt/react-native-addpay)
A React Native wrapper for AddPay integration (Android Only).

## ⚠️ Important Note

This package is designed for **Android devices only**. It will not function on iOS devices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install react-native-addpay
# or
yarn add react-native-addpay
```

### Android Setup

1. Open your `android/app/src/main/AndroidManifest.xml` file and add the following permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

2. Ensure that the AddPay app is installed on the device.

## Usage

Here's a basic example of how to use the package:

```javascript
import AddPay from "react-native-addpay";
// Sale Transaction
const saleRequest = {
  appId: "your_app_id",
  transData: {
    businessOrderNo: "202202222222",
    paymentScenario: "CARD",
    amt: "000000001000",
    // ... other required fields
  },
};

try {
  const response = await AddPay.sale(saleRequest);
  console.log("Sale successful:", response);
} catch (error) {
  console.error("Sale failed:", error);
}
```

## API Reference

### Methods

- `sale(request: SaleRequest): Promise<SaleResponse>`
- `refund(request: RefundRequest): Promise<RefundResponse>`
- `preAuth(request: PreAuthRequest): Promise<PreAuthResponse>`
- `preAuthComp(request: PreAuthCompRequest): Promise<PreAuthCompResponse>`
- `preAuthCancel(request: PreAuthCancelRequest): Promise<PreAuthCancelResponse>`
- `settlement(request: SettlementRequest): Promise<SettlementResponse>`
- `query(request: QueryRequest): Promise<QueryResponse>`
- `print(request: PrintRequest): Promise<PrintResponse>`
- `debiCheck(request: DebiCheckRequest): Promise<DebiCheckResponse>`

For detailed type definitions of requests and responses, please refer to the [types documentation](./src/types.ts).

## Troubleshooting

- **AddPay app not installed**: Ensure that the AddPay app is installed on the device.
- **Transaction fails**: Check the error message returned. Common issues include incorrect app ID or insufficient permissions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6.

## License

    This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Ray Caddick
