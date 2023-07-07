<script setup>
import paymentsGenerator from "../utils/paymentsGenerator";
import paymentIcon from "../../public/receipt.svg";
import useModalStore from "../store/modules/ModalStore";
import ModalTypes from "../utils/ModalTypes";

const payments = paymentsGenerator(526);
const ModalStore = useModalStore();
// {
//   number: 526,
//   id: 16,
//   date: '06.06.2023',
//   paymentId: '77',
//   time: '11:06',
//   sum: '50.58',
//   sender: 80,
//   status: 'Отправлено'
// }

const onReceiptClick = (payment) => {
  ModalStore.setModalProps(ModalTypes.PaymentDetails, payment);
  ModalStore.setVisible(true);
};
</script>

<template>
  <div class="main-container">
    <div class="main-list">
      <div v-for="item in payments" :key="item.paymentId">
        <p>Платёж № {{ item.number }}</p>
        <div>
          <img
            :src="paymentIcon"
            alt="payment_details"
            @click="onReceiptClick(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
