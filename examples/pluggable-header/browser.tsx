import { AppPluggable } from '../app-meta/mod.ts'
import { tw } from "@twind/core";

export default (() => {
  return (
    <div className={tw('foo p-4')}>
      <header className={tw('border-b-2 pb-4 mb-4')}>
        <div className={tw('flex justify-between items-center text-sm')}>
          <span>Hello, amigo!</span>
          <div className={tw('flex space-x-4')}>
            <a href="#" className={tw('text-blue-500')}>Link 1</a>
            <a href="#" className={tw('text-blue-500')}>Link 2</a>
            <a href="#" className={tw('text-blue-500')}>Link 3</a>
          </div>
          <button className={tw('border p-2 rounded')}>Profile</button>
        </div>
        <div className={tw('flex justify-between items-center mb-2')}>
          <input
            type="text"
            placeholder="Search..."
            className={tw('border p-2 rounded w-1/2')}
          />
          <select className={tw('border p-2 rounded')}>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
      </header>
    </div>
  );
}) satisfies  AppPluggable['browser'];
