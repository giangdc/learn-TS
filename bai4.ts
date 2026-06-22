const taikhoan = {
    ten: "Dang chau giang",
    email: "gianngdc2@fpt.com",
    diachi: "Ha noi",
    matkhau: "123456",
    sdt: "0987654321",
    isAdmin: true
};

console.log("Thông tin tài khoản: ", taikhoan.email +""+taikhoan.matkhau+"Admin:"+taikhoan.isAdmin);

const dstaikhoan = [
    {
        ten: "Dang chau giang",
        email: "giangdc2@fpt.comm",
        diachi: "Ha noi",
        matkhau: "123456",
        sdt: "0987654321",
        isAdmin: true
    },
    {
        ten: "Nguyen Van A",
        email: "a@fpt.com",
        diachi: "Ho Chi Minh",
        matkhau: "654321",
        sdt: "0912345678",
        isAdmin: false
    },
    {
        ten: "Le Thi B",
        email: "b@fpt.com",
        diachi: "Da Lat",
        matkhau: "987654",
        sdt: "0987654321",
        isAdmin: false
    }
];  
console.log("Danh sách tài khoản: ") ;
for (let tk of dstaikhoan) {
    //console.log("Danh sách tài khoản: ", tk.email );
   // console.log(`Danh sách tài khoản: ${tk.email} /${tk.matkhau}`);
   console.log(tk.email + " / " + tk.matkhau);
}


console.log("Tổng tk đang có: ", dstaikhoan.length);