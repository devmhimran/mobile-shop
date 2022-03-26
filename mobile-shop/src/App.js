import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className="container question">
      <div className="card w-75">
      <div className="card-body">
      <h3>রিয়েক্ট জেএস কিভাবে কাজ করে ? </h3>
      <p>রিয়েক্ট হচ্ছে জাভাস্ক্রিপ্ট এর একটি লাইব্রেরী । যা দ্বারা আধুনিক ইউজার ইন্টারফেস বানানোতে সাহায্য করে একজন ডেভেলপারকে সাহায্য করে । রিয়েক্ট জেএস JSX এর সাহায্যে কাজ করে যা কিনা DOM কে মেনিপুলেটের মাধ্যমে কাজ করে থাকে । রিয়েক্ট জেএস DOM কে মেনিপুলেশন করার কারণে স্পিড অপ্টিমাইজ করে যার কারণে দ্রুত ডাটা লোড নিতে সাহায্য করে । রিয়েক্ট জেএস কম্পোনেন্টের মাধ্যমে কাজ করা যায় বিধায় ডায়নামিক ওয়েবসাইট বানাতে অনেক সুবিধা হয় ।  </p>
      <hr />
      <h3>Props vs State</h3>
      <p>props শুধু রিড করা যায়, যা কিনা ডাটা বহন করে । props ডাটা এক কম্পোনেন্ট থেকে আরেক কম্পোনেন্টে পাঠাতে সাহায্য করে । state হচ্ছে আপডেটেবল ডাটা যা কিনা ওয়েবসাইটের ইন্ট্রেক্ট হওয়ার সাথে সাথে পরিবর্তন হতে থাকে । State রিড এবং রাইট দুটই করা যায় । state চাইল্ড কম্পোনেন্ট দ্বারা এক্সেস করতে পারে না । </p>
      </div>
      </div>
      </div>
    </div>
    
  );
}

export default App;
